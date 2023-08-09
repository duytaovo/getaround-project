import React, { ReactNode } from 'react'
import CustomeCommonQuestions from 'src/components/CustomeCommonQuestions/CustomeCommonQuestions'

import { Link } from 'react-router-dom'
import CustomLink from 'src/components/CustomLink'
import CustomSelect from 'src/components/Select'
import { selectItems } from 'src/items/FooterItem/FooterItem'
import { useAppSelector } from 'src/hooks/useRedux'
import TopGettingStarted from './components/TopGettingStarted'
import { IItemLink, IItemNailTheBasic, IItemTopGettingStarted } from 'src/types/hosting_comunity.type '
interface Props {}

interface PropsGettingStarted {
  itemGettingStarted: IItemNailTheBasic
  itemTopGettingStarted:IItemTopGettingStarted
  itemLinkNailTheBasic:IItemNailTheBasic[]
  itemLink:IItemLink[]
}

const GettingStarted = ({ itemGettingStarted,itemTopGettingStarted,itemLinkNailTheBasic,itemLink }: PropsGettingStarted) => {
  const { commonQuestion } = useAppSelector((state) => state.shareAcar)
  const renderItemNailTheBasic = () => {
    return itemLinkNailTheBasic?.map((item: any, index: number) => (
      <div key={index} className='text-mainColor hover:text-white cursor-pointer duration-300 transition-all'>
        {' '}
        {item.iconSTT}
        <span className='ml-3'>{item?.title}</span>
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
        <h2 className='text-textSizeHostingTitle tracking-tight leading-8 text-left mb-mbGettingStarted'>
          {itemGettingStarted.headerTheNailBasic}
        </h2>
        <div>
          <p className='text-textCustom mb-mbGettingStarted flex flex-col flex-start leading-5 break-words text-base line-clamp-4 text-ellipsis'>
            {itemGettingStarted.contentNailTheBasic}
          </p>
        </div>
        <div className='mb-mbGettingStarted'>{renderItemNailTheBasic()}</div>
        <div className='mb-mbGettingStarted'>
          <h2 className='text-textSizeHostingTitle'>{itemGettingStarted.headerBusiness}</h2>
          <p className='my-[29px] text-textCustom text-base ' >
            {itemGettingStarted.contentBusiness}
          </p>
          {renderItemLink()}
        </div>
        <CustomSelect
          width='400px'
          defaultValue='Pháp'
          options={selectItems}
          className='text-black border-none outline-none rounded-md h-10'
        />
      </div>
    </div>
  )
}

export default GettingStarted
