import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children: React.ReactNode
  to:string,
  props?:any,
}


const CustomLink = ({ children, to, ...props } : Props) => {
  return (
    <li
      className={`list-none hover:text-white `}
      style={{ cursor: 'pointer' }}
    >
      <Link className='hover:text-white' to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default CustomLink
