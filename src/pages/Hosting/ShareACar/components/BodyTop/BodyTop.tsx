import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'src/components/Button'
import {  changeColorWhiteAndMain } from 'src/helpers/getBreakpoint'
import { IBodyTop } from 'src/types/hoisting_shareACar.type'

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
      className={`${className} text-textMainColor flex items-center  justify-between transition-all duration-500 delay-100`}
    >
      <div className='w-[600px] h-[300px] flex flex-col justify-between items-start'>
        <h1 className='w-[500px]  text-[47px] text-mainColor'>{changeColorWhiteAndMain(_header)}</h1>
        <p className='w-[500px] text-ellipsis text-justify'>{item.content}</p>
        <Button
          onClick={onClick}
          children={<span className='text-xl'>Share A Car</span>}
          isNext={true}
          className='w-[200px] hover:duration-500 duration-500 hover:transition-all  text-white h-[70px]  rounded-lg bg-[#3699d3] hover:bg-black  '
        ></Button>
      </div>
      <img className='w-[401px] h-[300px]  bg-white rounded-2xl' src={item.img} alt='' />
    </div>
  )
}

export default BodyTop
