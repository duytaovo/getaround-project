// import { yupResolver } from '@hookform/resolvers/yup'
// import { FormControl, MenuItem, Select } from '@mui/material'
// import { unwrapResult } from '@reduxjs/toolkit'
// import React, { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { toast } from 'react-toastify'
// import Input from 'src/components/Input'
// import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
// import { addCars, getCarYear, getCars, getCarsSeri } from 'src/store/car/manageCar/managCarSlice'
// import { isAccessTokenExpired } from 'src/store/user/userSlice'
// import { ErrorResponse } from 'src/types/utils.type'
// import { schemaAddCar } from 'src/utils/rules'
// import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
// import SelectCustom from '../Select'
// import Button from 'src/components/Button'

// type Props = {}
// interface FormData {
//   license_plate: string
//   phoneOwner: string
//   vinNumber: string
//   carBrand: string
//   carYear: string
//   carSeri: string
//   carType: string
//   carLicense: string
//   currentLocation: string
// }
// export const FormInfo = () => {
//   const { carLicense, carType, carsBrand, carsModel, carsYear, carsSeri, carRegis } = useAppSelector(
//     (state) => state.car
//   )
//   const { userId } = useAppSelector((state) => state?.user)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const methods = ({} = useForm({
//     resolver: yupResolver(schemaAddCar)
//   }))
//   const carYears = [
//     '2010',
//     '2011',
//     '2012',
//     '2013',
//     '2014',
//     '2015',
//     '2016',
//     '2017',
//     '2018',
//     '2019',
//     '2020',
//     '2021',
//     '2022',
//     '2023',
//     '2024',
//     '2025'
//   ]
//   const {
//     handleSubmit,
//     formState: { errors },
//     setError,
//     register,
//     setValue,
//     watch,
//     getValues,
//     control
//   } = methods
//   const dispatch = useAppDispatch()
//   const [disabled, setDisabled] = useState<boolean>(false)
//   const [disabledModel, setDisabledModel] = useState<boolean>(true)
//   const [disabledSeri, setDisabledSeri] = useState<boolean>(true)
//   const [valueYear, setValueYear] = useState<string>('')
//   const [file, setFile] = useState<File[]>()
//   const imageArray = file || [] // Mảng chứa các đối tượng ảnh (File hoặc Blob)

//   // Tạo một mảng chứa các URL tạm thời cho ảnh
//   const imageUrls: string[] = []

//   for (const image of imageArray) {
//     const imageUrl = URL.createObjectURL(image)
//     imageUrls.push(imageUrl)
//   }

//   useEffect(() => {
//     setValue('carBrand', '')
//     setValue('carLicense', '')
//     setValue('carSeri', '')
//     setValue('carYear', '')
//     setValue('carType', '')
//     setValue('currentLocation', '')
//     setValue('license_plate', '')
//     setValue('phoneOwner', '')
//     setValue('vinNumber', '')
//   }, [])

//   const handleOnChangeCarBrand = async (value: string) => {
//     if (value !== '') {
//       setDisabledModel(false)
//     }
//     await dispatch(getCarYear(value))
//     await setValueYear(value)
//   }
//   const handleOnChangeYear = async ({ idBrand, idYear }: any) => {
//     await dispatch(getCarsSeri({ idYear, idBrand }))
//     if (idBrand !== '' && idYear !== '') {
//       setDisabledSeri(false)
//     }
//   }

//   const onSubmit = handleSubmit(async (data) => {
//     const body = {
//       userUuid: isAccessTokenExpired().userUuid,
//       currentLocationInHCM: data.currentLocation,
//       license_plate: data.license_plate,
//       phone_owner: data.phoneOwner,
//       vin_number: data.vinNumber,
//       user_id: userId,
//       car_brand_id: data.carBrand,
//       car_model_id: data.carYear,
//       car_seri_id: data.carSeri,
//       vehicle_type_id: data.carType,
//       car_license_id: data.carLicense,
//       regis: data.regis
//     }
//     try {
//       setIsSubmitting(true)
//       const res = await dispatch(addCars(body))
//       unwrapResult(res)
//       const d = res?.payload?.data
//       if (d?.status !== 200) return toast.error(d?.message)
//       await toast.success('Thêm xe thành công ')
//       await dispatch(getCars(''))
//       await setDisabled(false)
//       ;(await onChange) && onChange()
//     } catch (error: any) {
//       if (isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(error)) {
//         const formError = error.response?.data.data
//         if (formError) {
//           Object.keys(formError).forEach((key) => {
//             setError(key as keyof FormData, {
//               message: formError[key as keyof FormData],
//               type: 'Server'
//             })
//           })
//         }
//       }
//     } finally {
//       setIsSubmitting(false)
//     }
//   })

//   const onClickHuy = () => {
//     setValue('carBrand', '')
//     setValue('carLicense', '')
//     setValue('carYear', '')
//     setValue('carSeri', '')
//     setValue('carType', '')
//     setValue('currentLocation', '')
//     setValue('license_plate', '')
//     setValue('phoneOwner', '')
//     setValue('vinNumber', '')
//     onChange && onChange()
//     // setOpenModalUpload(true)
//   }
//   return (
//     <div>
//       <form className='profile-form__wrapper' autoComplete='off' onSubmit={onSubmit} noValidate>
//         {/* <span className='text-2xl p-4 pl-0  mb-8'>Thêm xe </span> */}
//         <p className='mb-3'>
//           (<span className='text-red-500 mb-2'> * </span>)Trường bắt buộc
//         </p>
//         <div className='flex items-center w-full space-x-2'>
//           <div className='w-1/2'>
//             {/* <h1 className='text-sm mb-2 text-[#29303b] font-medium text-left '></h1> */}
//             <Input
//               classNameInput='p-3 w-full text-black outline-none border border-gray-300 focus:border-gray-500 rounded-md focus:shadow-sm'
//               name='license_plate'
//               register={register}
//               type='text'
//               className=''
//               errorMessage={errors.license_plate?.message}
//               placeholder='Biển số xe'
//             />
//           </div>
//           <div className='w-1/2'>
//             <Input
//               classNameInput='p-3 w-full text-black outline-none border border-gray-300 focus:border-gray-500 rounded-md focus:shadow-sm'
//               name='phoneOwner'
//               register={register}
//               type='text'
//               className=''
//               errorMessage={errors.phoneOwner?.message}
//               placeholder='Số điện thoại '
//             />
//           </div>
//         </div>
//         <Input
//           classNameInput='p-3 w-full text-black outline-none border border-gray-300 focus:border-gray-500 rounded-md focus:shadow-sm'
//           name='vinNumber'
//           register={register}
//           type='text'
//           className=''
//           errorMessage={errors.vinNumber?.message}
//           placeholder='Số khung '
//         />
//         <Input
//           classNameInput='p-3 w-full text-black outline-none border border-gray-300 focus:border-gray-500 rounded-md focus:shadow-sm'
//           name='currentLocation'
//           register={register}
//           type='text'
//           className=''
//           errorMessage={errors.currentLocation?.message}
//           placeholder='Vị trí hiện tại'
//         />
//         <div className='rounded-2xl'>
//           <h1 className='text-sm mb-2 text-[#29303b] font-medium text-left '>
//             Phương thức đăng ký
//             <span className='text-red-500 text-sm font-medium '>*</span>
//           </h1>
//           <FormControl fullWidth>
//             <Select
//               // labelId='demo-multiple-checkbox-label'
//               multiple
//               placeholder='Chọn 1 hoặc nhiều phương thức ĐK'
//               // value={personName}
//               defaultValue={[]}
//               // input={<OutlinedInput label='Phương thức đăng ký' />}
//               MenuProps={MenuProps}
//               {...register('regis')}
//               displayEmpty
//               inputProps={{ 'aria-label': 'Without label' }}
//             >
//               {/* <MenuItem value=''>
//                         <p className='text-left text-[#777777]'>Phương thức đăng ký</p>
//                       </MenuItem> */}
//               {carRegis.map((item) => {
//                 return (
//                   <MenuItem
//                     // onClick={() => {
//                     //   handleChange(item.id)
//                     // }}
//                     value={item.id}
//                     key={item.id}
//                     className='text-black'
//                   >
//                     {item.registerMethodName}
//                   </MenuItem>
//                 )
//               })}
//             </Select>
//             <p className='text-red-500 text-left text-sm'>{errors.regis?.message}</p>
//           </FormControl>
//         </div>
//         {/* <SelectCustom
//           className={'flex-1'}
//           id='carModel'
//           label='Kiểu xe'
//           placeholder='Vui lòng chọn'
//           defaultValue={''}
//           options={carsModel}
//           register={register}
//           isModel={true}
//           disabled={false}
//           onChange={() => {}}
//         >
//           {errors.carModel?.message}
//         </SelectCustom> */}
//         <div className='space-x-2 flex flex-row  justify-between mt-2'>
//           <SelectCustom
//             className={'flex-1'}
//             id='carBrand'
//             label='Hãng xe'
//             placeholder='Vui lòng chọn'
//             defaultValue={''}
//             options={carsBrand}
//             register={register}
//             isBrand={true}
//             disabled={false}
//             onChange={handleOnChangeCarBrand}
//           >
//             {errors.carBrand?.message}
//           </SelectCustom>
//           <div className='flex-1'>
//             <h1 className='text-sm mb-2 text-[#29303b] font-medium text-left '>
//               Năm sản xuất
//               <span className='text-red-500 text-sm font-medium '>*</span>
//             </h1>
//             <FormControl fullWidth disabled={disabledModel}>
//               <Select
//                 // labelId='demo-multiple-checkbox-label'
//                 placeholder='Chọn năm sản xuất'
//                 // value={personName}
//                 defaultValue={[]}
//                 // input={<OutlinedInput label='Phương thức đăng ký' />}
//                 MenuProps={MenuProps}
//                 {...register('carYear')}
//                 displayEmpty
//                 inputProps={{ 'aria-label': 'Without label' }}
//               >
//                 {/* <MenuItem value=''>
//                         <p className='text-left text-[#777777]'>Phương thức đăng ký</p>
//                       </MenuItem> */}
//                 {carsYear.map((item) => {
//                   return (
//                     <MenuItem
//                       onClick={() => {
//                         // console.log(item.brandID)
//                         // console.log(item.releaseYearID)
//                         handleOnChangeYear({ idBrand: item.brandID, idYear: item.releaseYearID })
//                       }}
//                       value={item.year}
//                       key={item.releaseYearID}
//                       className='text-black'
//                     >
//                       {item.year}
//                     </MenuItem>
//                   )
//                 })}
//               </Select>
//               <p className='text-red-500 text-left text-sm'>{errors.regis?.message}</p>
//             </FormControl>
//           </div>
//         </div>
//         <SelectCustom
//           className={'mt-2'}
//           id='carSeri'
//           label='Dòng xe'
//           placeholder='Vui lòng chọn'
//           defaultValue={''}
//           options={carsSeri}
//           register={register}
//           isCarSeri={true}
//           disabled={disabledSeri}
//           onChange={() => {}}
//         >
//           {errors.carSeri?.message}
//         </SelectCustom>

//         <div className='space-x-2 mt-2 flex flex-row justify-between w-full'>
//           <SelectCustom
//             className={''}
//             id='carType'
//             label='Loại phương tiện'
//             placeholder='Vui lòng chọn'
//             defaultValue={''}
//             options={carType}
//             register={register}
//             isCarType={true}
//             disabled={false}
//             onChange={() => {}}
//           >
//             {errors.carType?.message}
//           </SelectCustom>
//           <SelectCustom
//             className={''}
//             id='carLicense'
//             label='Loại biển xe'
//             placeholder='Vui lòng chọn'
//             defaultValue={''}
//             options={carLicense}
//             register={register}
//             isCarLicense={true}
//             disabled={false}
//             onChange={() => {}}
//           >
//             {errors.carLicense?.message}
//           </SelectCustom>
//         </div>
//         <div className='flex space-x-2 mt-6'>
//           {current === 0 && (
//             <Button
//               onClick={onClickHuy}
//               // type='submit'
//               className='flex w-1/2 items-center justify-center rounded-xl bg-red-500 py-4 px-2 text-base text-white hover:opacity-80'
//             >
//               Hủy
//             </Button>
//           )}
//           {current < steps.length - 1 && (
//             <Button
//               type='submit'
//               onClick={() => {
//                 next()
//               }}
//               className={`flex w-1/2 items-center justify-center rounded-xl bg-mainColor py-4 px-2 text-base text-white hover:opacity-80 ${
//                 disabled == true && 'disabled'
//               }`}
//             >
//               {isSubmitting ? <CircularProgress sx={{ width: '25px', height: '25px' }} disableShrink /> : 'Tiếp tục'}
//             </Button>
//           )}
//         </div>
//       </form>
//     </div>
//   )
// }
