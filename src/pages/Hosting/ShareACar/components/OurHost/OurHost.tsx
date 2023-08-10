import React from 'react'
import { Text } from 'src/components/Edition/Text'
import { IItemGetAroundYourBack } from 'src/types/hosting_shareACar.type'
import { iDGenerator } from 'src/utils/idGenerator'

type Props = {
  item: IItemGetAroundYourBack
}

const OurHost = ({ item }: Props) => {
  return (
    <div>
      <Text
        id={`ourHost-shareAcar-title`}
        tag='span'
        content={item.title || ''}
        className={`text-mainColor font-medium text-center uppercase leading-3 flex justify-center mb-2`}
      />
      {/* <span className='text-mainColor font-medium text-center uppercase leading-3 flex justify-center mb-2'>
            {item.title}
          </span> */}
      <Text
        id={`ourHost-shareAcar-content`}
        tag='h2'
        content={item.content || ''}
        className={`flex text-[32px] text-center  justify-center mb-2`}
      />
      {/* <h2 className=' flex text-[32px] text-center  justify-center mb-2'>{item.content}</h2> */}
    </div>
  )
}

export default OurHost
