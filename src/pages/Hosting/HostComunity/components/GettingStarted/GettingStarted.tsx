import React, { ReactNode } from 'react'
import CustomeCommonQuestions from 'src/components/CustomeCommonQuestions/CustomeCommonQuestions'

import { Link } from 'react-router-dom'
import CustomLink from 'src/components/CustomLink'
import CustomSelect from 'src/components/Select'
import { selectItems } from 'src/items/FooterItem/FooterItem'
import { useAppSelector } from 'src/hooks/useRedux'
import TopGettingStarted from './components/TopGettingStarted'
import { IItemLink, IItemNailTheBasic, IItemTopGettingStarted } from 'src/types/hosting_comunity.type '
import { Text } from 'src/components/Edition/Text'
interface Props {}

interface PropsGettingStarted {
  itemGettingStarted: IItemNailTheBasic
  itemTopGettingStarted: IItemTopGettingStarted
  itemLinkNailTheBasic: IItemNailTheBasic[]
  itemLink: IItemLink[]
}

const GettingStarted = ({
  itemGettingStarted,
  itemTopGettingStarted,
  itemLinkNailTheBasic,
  itemLink
}: PropsGettingStarted) => {
  const { commonQuestion } = useAppSelector((state) => state.community)
  const data = useAppSelector((state) => state.data.data)

  const renderItemNailTheBasic = () => {
    return itemLinkNailTheBasic?.map((item: any, index: number) => (
      <div key={index} className='text-mainColor flex hover:text-white cursor-pointer duration-300 transition-all'>
        {' '}
        {item.iconSTT}
        <Text
          id={`txt_GettingStarted_community_itemNailTheBasic${index}`}
          tag='span'
          content={data[item.title || '']}
          className={`ml-3`}
        />
        {/* <span className='ml-3'>{item?.title}</span> */}
      </div>
    ))
  }

  const renderItemLink = () => {
    return itemLink?.map((item: any, index: number) => (
      <div key={index}>
        <Link to={item?.to} className='text-mainColor underline hover:text-white duration-300 transition-all'>
          {item?.title}
        </Link>
      </div>
    ))
  }
  return (
    <div>
      <TopGettingStarted item={itemTopGettingStarted} />
      <div className='mb-mbGettingStarted'>
        <CustomeCommonQuestions
          titleClassName='text-textCustom text-[18px] tracking-tight leading-[22.4px]'
          items={commonQuestion}
          className='text-textCustom'
        />
      </div>
      <div className='mb-mbGettingStarted gap-y-3'>
        <Text
          id={`txt_GettingStarted_community_headerTheNailBasic`}
          tag='h2'
          content={data[itemGettingStarted.headerTheNailBasic || '']}
          className={`text-textSizeHostingTitle tracking-tight leading-8 text-left mb-mbGettingStarted `}
        />
        {/* <h2 className='text-textSizeHostingTitle tracking-tight leading-8 text-left mb-mbGettingStarted'>
          {itemGettingStarted.headerTheNailBasic}
        </h2> */}
        <div>
          <Text
            id={`txt_GettingStarted_community_contentNailTheBasic`}
            tag='p'
            content={data[itemGettingStarted.contentNailTheBasic || '']}
            className={`text-textCustom mb-mbGettingStarted flex flex-col flex-start leading-5 break-words text-base line-clamp-4 text-ellipsis `}
          />
          {/* <p className='text-textCustom mb-mbGettingStarted flex flex-col flex-start leading-5 break-words text-base line-clamp-4 text-ellipsis'>
            {itemGettingStarted.contentNailTheBasic}
          </p> */}
        </div>
        <div className='mb-mbGettingStarted'>{renderItemNailTheBasic()}</div>
        <div className='mb-mbGettingStarted'>
          <Text
            id={`txt_GettingStarted_community_headerBusiness`}
            tag='h2'
            content={data[itemGettingStarted.headerBusiness || '']}
            className={`text-textSizeHostingTitle  `}
          />
          {/* <h2 className='text-textSizeHostingTitle'>{itemGettingStarted.headerBusiness}</h2> */}
          <Text
            id={`txt_GettingStarted_community_contentBusiness`}
            tag='p'
            content={data[itemGettingStarted.contentBusiness || '']}
            className={`my-[29px] text-textCustom text-base  `}
          />
          {/* <p className='my-[29px] text-textCustom text-base '>{itemGettingStarted.contentBusiness}</p> */}
          {renderItemLink()}
        </div>
        <CustomSelect
          width='150px'
          defaultValue='Pháp'
          options={selectItems}
          className='text-black border-none outline-none rounded-md h-10'
        />
      </div>
    </div>
  )
}

export default GettingStarted
