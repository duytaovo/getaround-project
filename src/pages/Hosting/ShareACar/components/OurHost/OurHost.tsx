import React from 'react'
import { IItemGetAroundYourBack } from 'src/types/hosting_shareACar.type'


type Props = {
    item:IItemGetAroundYourBack
}

const OurHost = ({item}: Props) => {
  return (
    <div>
     <span className='text-mainColor font-medium text-center uppercase leading-3 flex justify-center mb-2'>
            {item.title}
          </span>
          <h2 className=' flex text-[32px] text-center  justify-center mb-2'>
            {item.content}
          </h2>
    </div>
  )
}

export default OurHost
