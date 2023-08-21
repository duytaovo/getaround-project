import React from 'react'
import { Text } from 'src/components/Edition/Text'
import { useAppSelector } from 'src/hooks/useRedux'
import { IItemGetAroundYourBack } from 'src/types/hosting_shareACar.type'

type Props = {
  item: IItemGetAroundYourBack
  prefix?: string
}

const OurHost = ({ item, prefix }: Props) => {
  const data = useAppSelector((state) => state.data.data)

  return (
    <div>
      <Text
        id={`ourHost-shareAcar-title`}
        tag='span'
        content={data[item.title || '']}
        className={`text-mainColor font-medium text-center uppercase leading-3 flex justify-center mb-2`}
      />
      {/* <span className='text-mainColor font-medium text-center uppercase leading-3 flex justify-center mb-2'>
            {item.title}
          </span> */}
      <Text
        id={`ourHost-shareAcar-content`}
        tag='h2'
        content={data[item.content || '']}
        className={`flex text-[32px] text-center  justify-center mb-2`}
      />
      {/* <h2 className=' flex text-[32px] text-center  justify-center mb-2'>{item.content}</h2> */}
    </div>
  )
}

export default OurHost
