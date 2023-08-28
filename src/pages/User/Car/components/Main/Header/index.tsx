import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from 'src/components/Button'
import { Text } from 'src/components/Edition/Text'

type Props = {
  onClick: (value: boolean) => void
}

const Header = ({ onClick }: Props) => {
  const location = useLocation()
  const handleOpen = () => {
    onClick && onClick(true)
  }
  return (
    <div className='flex justify-between items-center'>
      <h5 className='text-[24px] font-medium leading-7 m-[24px_0px_12px_24px] uppercase'>
        {location.pathname.slice(6)}
      </h5>
      <Button
        onClick={handleOpen}
        children={
          <Text
            id={`txt-buttonManageCar`}
            tag='span'
            content={'Share a new Car'}
            className={`text-xl -translate-y-3`}
          />
        }
        isNext={true}
        className='w-[200px] [&>*]:flex [&>*]:flex-row hover:duration-500 mt-2 duration-500 hover:transition-all  text-white h-[50px]  rounded-lg bg-[#3699d3] hover:bg-black  '
      ></Button>
    </div>
  )
}

export default Header
