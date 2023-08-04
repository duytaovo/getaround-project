import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'src/components/Button'
import { changeColor } from 'src/helpers/getBreakpoint'

interface Props {
  header?: string
  content?: string
  img?: string
  className?: string
}

const BodyTop = ({ header, content, img, className }: Props) => {
  const _header = header?.split(' ');
  const _content = content?.split(' ');

  return (
    <div
      className={`${className} text-textMainColor flex items-center  justify-between transition-all duration-500 delay-100`}
    >
      <div className='w-[600px] h-[300px] flex flex-col justify-between items-start'>
        <h1 className='w-[500px]  text-[47px] text-mainColor'>{changeColor(_header)}</h1>
        <p className='w-[500px] text-ellipsis'>{changeColor(_content)}</p>
        <Button
          children={<span className='text-xl'>Chia sẻ xe</span>}
          isNext={true}
          className='w-[200px] hover:duration-500 duration-500 hover:transition-all  text-white h-[70px]  rounded-lg bg-[#3699d3] hover:bg-black  '
        ></Button>
      </div>
      <img className='w-[401px] h-[388px] bg-white rounded-2xl' src={img} alt='' />
    </div>
  )
}

export default BodyTop
