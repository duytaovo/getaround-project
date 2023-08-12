import React from 'react'
import { Text } from 'src/components/Edition/Text'
import { useAppSelector } from 'src/hooks/useRedux'
import { IItemTopGettingStarted } from 'src/types/hosting_comunity.type '

type Props = {
  item: IItemTopGettingStarted
}

const TopGettingStarted = ({ item }: Props) => {
  const data = useAppSelector((state) => state.data.data)

  return (
    <div>
      <div className='mb-mbGettingStarted gap-10'>
        <Text
          id={`txt_topGettingStarted_community_topHeader`}
          tag='span'
          content={data[item.topHeader || '']}
          className={`text-mainColor lg:text-center lg:mb-2  text-[11px] font-medium leading-3 text-center uppercase mb-mbGettingStarted  `}
        />
        {/* <span className='text-mainColor lg:text-center lg:mb-2  text-[11px] font-medium leading-3 text-center uppercase mb-mbGettingStarted'>
        {item.topHeader}
        </span> */}
        <Text
          id={`txt_topGettingStarted_community_title`}
          tag='strong'
          content={data[item.title || '']}
          className={`flex text-textSizeHostingTitle font-medium tracking-tight  leading-8 text-left mb-mbGettingStarted mt-[29px]  `}
        />
        {/* <strong className='flex text-textSizeHostingTitle font-medium tracking-tight  leading-8 text-left mb-mbGettingStarted mt-[29px]'>
          {item.title}
        </strong> */}
        <Text
          id={`txt_topGettingStarted_community_content`}
          tag='p'
          content={data[item.content || '']}
          className={`text-textCustom text-base flex flex-start leading-[22.4px] line-clamp-3 text-ellipsis  `}
        />
        {/* <p className='text-textCustom text-base flex flex-start leading-[22.4px] line-clamp-3 text-ellipsis'>{item.content}</p> */}
      </div>
    </div>
  )
}

export default TopGettingStarted
