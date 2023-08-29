import React, { useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useSpring, animated } from '@react-spring/web'
import Input from 'src/components/Input'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

import SelectMUI, { SelectChangeEvent } from '@mui/material/Select'
import type { CustomTagProps } from 'rc-select/lib/BaseSelect'
import { Select, Space } from 'antd'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import SelectCustom from './Select'
import { schemaAddCar } from 'src/utils/rules'
import Button from 'src/components/Button'
import { toast } from 'react-toastify'
import { ErrorResponse } from 'src/types/utils.type'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { unwrapResult } from '@reduxjs/toolkit'
import { addCars } from 'src/store/car/manageCar/managCarSlice'
import { Navigate, useNavigate } from 'react-router-dom'
interface FadeProps {
  children: React.ReactElement
  in?: boolean
  onClick?: any
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void
  onExited?: (node: HTMLElement, isAppearing: boolean) => void
  ownerState?: any
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { children, in: open, onClick, onEnter, onExited, ownerState, ...other } = props
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as any, true)
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as any, true)
      }
    }
  })

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  )
})

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  //   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
}

type Props = {
  open: boolean
  onChange: () => void
}
interface FormData {
  license_plate: string
  phoneOwner: string
  vinNumber: string
  carBrand: string
  carModel: string
  carSeri: string
  carType: string
  carLicense: string
}
export default function CustomModal({ open, onChange }: Props) {
  const { carLicense, carType, carsBrand, carsModel, carsSeri } = useAppSelector((state) => state.car)
  const { permission, userId, userUuid } = useAppSelector((state) => state?.user)
  const navigate = useNavigate()
  const {
    handleSubmit,
    formState: { errors },
    setError,
    register,
    setValue
  } = useForm<FormData>({
    resolver: yupResolver(schemaAddCar)
  })
  const dispatch = useAppDispatch()

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`)
  }

  useEffect(() => {
    // setValue("avatar", profile?.user.avatar);
  }, [])
  const onSubmit = handleSubmit(async (data) => {
    const body = {
      userUuid: userUuid,
      currentLocationInHCM: 'Phú Nhuận',
      license_plate: data.license_plate,
      phone_owner: data.phoneOwner,
      vin_number: data.vinNumber,
      user_id: userId,
      car_brand_id: data.carBrand,
      car_model_id: data.carModel,
      car_seri_id: data.carSeri,
      vehicle_type_id: data.carType,
      car_license_id: data.carLicense,
      regis: [2, 3]
    }
    try {
      const res = await dispatch(addCars(body))
      unwrapResult(res)
      console.log(res)
      const d = res?.payload?.data
      if (d?.status !== 200) return toast.error(d?.message)
      await toast.success('Thêm xe thành công ')
      navigate('/host/xe')
    } catch (error: any) {
      if (isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(error)) {
        const formError = error.response?.data.data
        if (formError) {
          Object.keys(formError).forEach((key) => {
            setError(key as keyof FormData, {
              message: formError[key as keyof FormData],
              type: 'Server'
            })
          })
        }
      }
    }
  })
  return (
    <div>
      <Modal
        aria-labelledby='spring-modal-title'
        aria-describedby='spring-modal-description'
        open={open}
        onClose={onChange}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade
          }
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form className='profile-form__wrapper' autoComplete='off' onSubmit={onSubmit} noValidate>
              <span className='text-2xl p-4 pl-0  mb-8'>Thêm xe </span>
              <p className='mb-3'>
                (<span className='text-red-500 mb-2'> * </span>)Trường bắt buộc
              </p>
              <div className='flex items-center w-full space-x-2'>
                <div className='w-1/2'>
                  <h1 className='text-sm mb-2 text-[#29303b] font-medium text-left '></h1>
                  <Input
                    classNameInput='p-3 w-full text-black outline-none border border-gray-300 focus:border-gray-500 rounded-md focus:shadow-sm'
                    name='license_plate'
                    register={register}
                    type='text'
                    className=''
                    errorMessage={errors.license_plate?.message}
                    placeholder='Biển số xe'
                  />
                </div>
                <div className='w-1/2'>
                  <Input
                    classNameInput='p-3 w-full text-black outline-none border border-gray-300 focus:border-gray-500 rounded-md focus:shadow-sm'
                    name='phoneOwner'
                    register={register}
                    type='text'
                    className=''
                    errorMessage={errors.phoneOwner?.message}
                    placeholder='Số điện thoại '
                  />
                </div>
              </div>
              <Input
                classNameInput='p-3 w-full text-black outline-none border border-gray-300 focus:border-gray-500 rounded-md focus:shadow-sm'
                name='vinNumber'
                register={register}
                type='text'
                className=''
                errorMessage={errors.vinNumber?.message}
                placeholder='Số VIN '
              />
              <div className='rounded-2xl'>
                <Select
                  mode='multiple'
                  style={{ width: '100%' }}
                  placeholder='Lựa chọn phương thức đăng ký'
                  defaultValue={['2', '3']}
                  onChange={handleChange}
                  optionLabelProp='label'
                >
                  <Select.Option value='2' label='Cho thuê có tài xế'>
                    <Space>2</Space>
                  </Select.Option>
                  <Select.Option value='3' label='Cho thuê tự lái'>
                    <Space>3</Space>
                  </Select.Option>
                </Select>
              </div>
              <div className='space-x-2 flex flex-row justify-between mt-2'>
                <SelectCustom
                  className={''}
                  id='carBrand'
                  label='Hãng xe'
                  placeholder='Vui lòng chọn'
                  defaultValue={''}
                  options={carsBrand}
                  register={register}
                  isBrand={true}
                >
                  {errors.carBrand?.message}
                </SelectCustom>
                <SelectCustom
                  className={''}
                  id='carModel'
                  label='Kiểu xe'
                  placeholder='Vui lòng chọn'
                  defaultValue={''}
                  options={carsModel}
                  register={register}
                  isModel={true}
                >
                  {errors.carModel?.message}
                </SelectCustom>
              </div>
              <SelectCustom
                className={'mt-2'}
                id='carSeri'
                label='Dòng xe'
                placeholder='Vui lòng chọn'
                defaultValue={''}
                options={carsSeri}
                register={register}
                isCarSeri={true}
              >
                {errors.carSeri?.message}
              </SelectCustom>

              <div className='space-x-2 mt-2 flex flex-row justify-between w-full'>
                <SelectCustom
                  className={''}
                  id='carType'
                  label='Loại phương tiện'
                  placeholder='Vui lòng chọn'
                  defaultValue={''}
                  options={carType}
                  register={register}
                  isCarType={true}
                >
                  {errors.carType?.message}
                </SelectCustom>
                <SelectCustom
                  className={''}
                  id='carLicense'
                  label='Loại biển xe'
                  placeholder='Vui lòng chọn'
                  defaultValue={''}
                  options={carLicense}
                  register={register}
                  isCarLicense={true}
                >
                  {errors.carLicense?.message}
                </SelectCustom>
              </div>
              <div className='flex space-x-2 mt-6'>
                <Button
                  type='submit'
                  className='flex w-1/2 items-center justify-center rounded-xl bg-mainColor py-4 px-2 text-base text-white hover:opacity-80'
                >
                  Lưu
                </Button>
                <Button
                  type='submit'
                  className='flex w-1/2 items-center justify-center rounded-xl bg-red-500 py-4 px-2 text-base text-white hover:opacity-80'
                >
                  Hủy
                </Button>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
