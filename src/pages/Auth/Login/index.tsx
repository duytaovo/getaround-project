import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'src/components/Button'
import { useAppDispatch } from 'src/hooks/useRedux'
import { AppContext } from 'src/contexts/app.context'
import { useForm } from 'react-hook-form'
import { ErrorResponse } from 'src/types/utils.type'
import { toast } from 'react-toastify'
import Input from 'src/components/Input'
import { Schema, schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { unwrapResult } from '@reduxjs/toolkit'
import { isAccessTokenExpired, login, updateUser } from 'src/store/user/userSlice'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { getAccessTokenFromLS, setAccessTokenToLS } from 'src/utils/auth'

type FormData = Pick<Schema, 'email' | 'password'>
const loginSchema = schema.pick(['email', 'password'])

const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { setIsAuthenticated } = useContext(AppContext)
  const {
    handleSubmit,
    formState: { errors },
    setError,
    register
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const onSubmit = handleSubmit(async (data) => {
    const body = {
      email: data.email,
      password: data.password
    }
    try {
      const res = await dispatch(login(body))
      unwrapResult(res)

      const d = res?.payload?.data
      if (d?.result == 0) return toast.error(d?.message)
      await setAccessTokenToLS(d?.accessToken)
      // await getAccessTokenFromLS()
      await dispatch(updateUser(isAccessTokenExpired()))
      await setIsAuthenticated(true)
      await navigate('/')
      await toast.success('Đăng nhập thành công ')
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
    <div className='w-full flex justify-center'>
      <div className='lg:col-span-2 lg:col-start-4 bg-white w-1/2 md:w-full justify-center m-10 rounded-2xl'>
        <div className='flex items-center justify-center rounded-2xl mt-3'>
          <img src='/logo.jpg' alt='logo' className='w-30 h-20'></img>
        </div>
        <form className='rounded p-10 shadow-sm' onSubmit={onSubmit} noValidate>
          <div className=' flex items-center justify-center text-[25px] text-black'>Đăng nhập</div>

          <Input
            name='email'
            register={register}
            type='text'
            className='mt-8'
            errorMessage={errors.email?.message}
            placeholder='User name'
          />
          <Input
            name='password'
            register={register}
            type='password'
            className='mt-2'
            classNameEye='absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]'
            errorMessage={errors.password?.message}
            placeholder='Password'
            autoComplete='on'
          />
          <div className='mt-3'>
            <Button
              type='submit'
              className='flex w-full items-center justify-center rounded-[30px] bg-mainColor py-4 px-2 text-sm uppercase text-white hover:opacity-80'
            >
              Đăng nhập
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
