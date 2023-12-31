import React from 'react'
import { Text } from 'src/components/Edition/Text'
import { useAppSelector } from 'src/hooks/useRedux'
import { IItemGetAroundYourBack } from 'src/types/hosting_shareACar.type'

type Props = {
  item: IItemGetAroundYourBack
}

const GetAroundYourBack = ({ item }: Props) => {
  const data = useAppSelector((state) => state.data.data)

  return (
    <div>
      <Text
        id={`txt-getAroundYourBack-shareACar-title`}
        tag='span'
        content={data[item.title || '']}
        className={`text-mainColor text-sm font-medium flex justify-center mb-2 `}
      />
      {/* <span className='text-mainColor text-sm font-medium flex justify-center mb-2'>{item.title}</span> */}
      <Text
        id={`txt-getAroundYourBack-shareACar-content`}
        tag='div'
        content={data[item.content || '']}
        className={`text-[32px] font-medium tracking-tight leading-8 text-center mb-5 `}
      />
      {/* <div className='text-[32px] font-medium tracking-tight leading-8 text-center mb-5'>{item.content}</div> */}
    </div>
  )
}

export default GetAroundYourBack
