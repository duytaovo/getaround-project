import React from 'react'
import Button from 'src/components/Button'

interface Props {
  header?:string
  content?:string
  img?:string
}

const BodyTop = ({header,content,img}: Props) => {
  return (
    <div className='text-textMainColor flex items-center  justify-between'>
      <div className='w-[600px] h-[300px] flex flex-col justify-between items-start'>
        <h1 className='w-[500px]  text-[47px] text-mainColor'>{header}</h1>
        <p className='w-[500px] text-ellipsis'>
         {content}
        </p>
        <Button
          children={<span className='text-xl'>Chia sẻ xe</span>}
          isNext={true}
          className='w-[200px] hover:duration-500 duration-500 hover:transition-all  text-white h-[70px]  rounded-lg hover:bg-mainColor bg-black'
        ></Button>
      </div>
      <img
        className='w-[401px] h-[388px] bg-white rounded-md'
        src={img}
        alt=''
      />
    </div>
  )
}

export default BodyTop
