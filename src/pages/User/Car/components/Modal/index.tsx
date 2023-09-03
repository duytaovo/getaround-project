import React, { useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useSpring, animated } from '@react-spring/web'
import Input from 'src/components/Input'
import { Space } from 'antd'
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
import { addCars, getCars } from 'src/store/car/manageCar/managCarSlice'
import { isAccessTokenExpired } from 'src/store/user/userSlice'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { CircularProgress, OutlinedInput } from '@mui/material'
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
const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
]

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
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
  currentLocation: string
}
interface Regis {
  regis: string[]
}
export default function CustomModal({ open, onChange }: Props) {
  const { carLicense, carType, carsBrand, carsModel, carsSeri, carRegis } = useAppSelector((state) => state.car)
  const { userId } = useAppSelector((state) => state?.user)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    handleSubmit,
    formState: { errors },
    setError,
    register,
    setValue
  } = useForm({
    resolver: yupResolver(schemaAddCar)
  })
  const dispatch = useAppDispatch()
  const [disabled, setDisabled] = useState<boolean>(false)

  useEffect(() => {
    setValue('carBrand', '')
    setValue('carLicense', '')
    setValue('carModel', '')
    setValue('carSeri', '')
    setValue('carType', '')
    setValue('currentLocation', '')
    setValue('license_plate', '')
    setValue('phoneOwner', '')
    setValue('vinNumber', '')
  }, [])
  const onSubmit = handleSubmit(async (data) => {
    const body = {
      userUuid: isAccessTokenExpired().userUuid,
      currentLocationInHCM: data.currentLocation,
      license_plate: data.license_plate,
      phone_owner: data.phoneOwner,
      vin_number: data.vinNumber,
      user_id: userId,
      car_brand_id: data.carBrand,
      car_model_id: data.carModel,
      car_seri_id: data.carSeri,
      vehicle_type_id: data.carType,
      car_license_id: data.carLicense,
      regis: data.regis
    }
    try {
      setIsSubmitting(true)
      const res = await dispatch(addCars(body))
      unwrapResult(res)
      const d = res?.payload?.data
      if (d?.status !== 200) return toast.error(d?.message)
      await toast.success('Thêm xe thành công ')
      await dispatch(getCars(''))
      await setDisabled(false)
      ;(await onChange) && onChange()
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
    } finally {
      setIsSubmitting(false)
    }
  })

  const onClickHuy = () => {
    setValue('carBrand', '')
    setValue('carLicense', '')
    setValue('carModel', '')
    setValue('carSeri', '')
    setValue('carType', '')
    setValue('currentLocation', '')
    setValue('license_plate', '')
    setValue('phoneOwner', '')
    setValue('vinNumber', '')
    onChange && onChange()
  }
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
                  {/* <h1 className='text-sm mb-2 text-[#29303b] font-medium text-left '></h1> */}
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
                placeholder='Số khung '
              />
              <Input
                classNameInput='p-3 w-full text-black outline-none border border-gray-300 focus:border-gray-500 rounded-md focus:shadow-sm'
                name='currentLocation'
                register={register}
                type='text'
                className=''
                errorMessage={errors.currentLocation?.message}
                placeholder='Vị trí hiện tại'
              />
              <div className='rounded-2xl'>
                <h1 className='text-sm mb-2 text-[#29303b] font-medium text-left '>
                  Phương thức đăng ký
                  <span className='text-red-500 text-sm font-medium '>*</span>
                </h1>
                <FormControl fullWidth>
                  <Select
                    // labelId='demo-multiple-checkbox-label'
                    multiple
                    placeholder='Chọn 1 hoặc nhiều phương thức ĐK'
                    // value={personName}
                    defaultValue={[]}
                    // input={<OutlinedInput label='Phương thức đăng ký' />}
                    MenuProps={MenuProps}
                    {...register('regis')}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value=''>
                      <p className='text-left text-[#777777]'>Phương thức đăng ký</p>
                    </MenuItem>
                    {carRegis.map((item) => {
                      return (
                        <MenuItem
                          // onClick={() => {
                          //   handleChange(item.id)
                          // }}
                          value={item.id}
                          key={item.id}
                          className='text-black'
                        >
                          {item.registerMethodName}
                        </MenuItem>
                      )
                    })}
                  </Select>
                  <p className='text-red-500 text-left text-sm'>{errors.regis?.message}</p>
                </FormControl>
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
                  className={`flex w-1/2 items-center justify-center rounded-xl bg-mainColor py-4 px-2 text-base text-white hover:opacity-80 ${
                    disabled == true && 'disabled'
                  }`}
                >
                  {isSubmitting ? <CircularProgress sx={{ width: '25px', height: '25px' }} disableShrink /> : 'Lưu'}
                </Button>
                <Button
                  onClick={onClickHuy}
                  // type='submit'
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
