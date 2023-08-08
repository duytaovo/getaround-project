import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'src/components/Button'
import {  changeColorWhiteAndMain } from 'src/helpers/getBreakpoint'
import { IBodyTop } from 'src/types/hosting_shareACar.type'

interface Props {
  item:IBodyTop
  className?:string
}

const BodyTop = ({ item,className }: Props) => {
  const _header = item.header?.split(' ');
  const _content = item.content?.split(' ');
  const onClick = () => {
    const element = document.querySelector(`#getstarted`)
    element &&
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
  }
  return (
    <div
      className={`${className} text-textMainColor space-x-5 lg:space-x-0 flex items-center lg:flex-col-reverse justify-between`}
    >
      <div className='w-1/2 lg:w-full  h-full lg:h-full flex flex-col justify-between items-start'>
        <h1 className=' text-[47px] text-mainColor'>{changeColorWhiteAndMain(_header)}</h1>
        <p className='w-[90%] text-ellipsis text-justify break-words'>{item.content}</p>
        <Button
          onClick={onClick}
          children={<span className='text-xl'>Share A Car</span>}
          isNext={true}
          className='w-[200px] hover:duration-500 mt-2 duration-500 hover:transition-all  text-white h-[70px]  rounded-lg bg-[#3699d3] hover:bg-black  '
        ></Button>
      </div>
      <img className='w-[45%] lg:w-full h-[300px]  bg-white rounded-2xl p-4 px-4' src={item.img} alt='' />
    </div>
  )
}

export default BodyTop
