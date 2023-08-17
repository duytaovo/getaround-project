import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Text } from 'src/components/Edition/Text'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { _getData } from 'src/store/dataSlice'
import { IItemGetAroundYourBack } from 'src/types/hosting_shareACar.type'

type Props = {
  item: IItemGetAroundYourBack
}

const OurHost = ({ item }: Props) => {
  const data = useAppSelector((state) => state.data.data)
  const dispatch = useAppDispatch()

  useEffect(() => {}, [dispatch])
  return (
    <div>
      <Text
        id={`txt_OurHost_community_title`}
        tag='span'
        content={data['txt_OurHost_community_title' || '']}
        className={`text-mainColor font-medium text-center uppercase leading-3 flex justify-center mb-2 `}
      />
      {/* <span className='text-mainColor font-medium text-center uppercase leading-3 flex justify-center mb-2'>abc</span> */}
      <Text
        id={`txt_OurHost_community_content`}
        tag='h2'
        content={data[item.content || '']}
        className={`flex text-[32px] text-center  justify-center mb-2 `}
      />
      {/* <h2 className=' flex text-[32px] text-center  justify-center mb-2'>{item.content}</h2> */}
    </div>
  )
}

export default OurHost
