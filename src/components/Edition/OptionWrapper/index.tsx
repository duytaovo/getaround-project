import React, { ReactNode } from 'react'
import Button from '@mui/material/Button'

interface IProps {
  children: ReactNode
  onClick?: () => void
}

const OptionWrapper: React.FC<IProps> = ({ children }) => {
  return <div className='flex h-17 items-end py-1'>{children}</div>
}

export { OptionWrapper }
