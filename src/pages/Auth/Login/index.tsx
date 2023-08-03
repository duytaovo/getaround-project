import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'src/components/Button'
import { FcGoogle } from 'react-icons/fc'
import { AppContext } from 'src/contexts/app.context'

const Login = () => {
  return (
    <div className='lg:col-span-2 lg:col-start-4 '>
      <div className='flex items-center justify-center'>
        <img src='https://music.youtube.com/img/on_platform_logo_dark.svg' alt=''></img>
      </div>

      <div className='mt-3 flex items-center justify-center'>
        <div className='flex items-center  justify-center gap-3 hover:opacity-80'>
          <FcGoogle size={18} />
          Đăng nhập
        </div>
      </div>
    </div>
  )
}

export default Login
