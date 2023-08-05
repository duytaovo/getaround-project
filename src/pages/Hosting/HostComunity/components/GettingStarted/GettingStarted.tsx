import React, { ReactNode } from 'react'
import CustomeCommonQuestions from 'src/components/CustomeCommonQuestions/CustomeCommonQuestions'
import { items } from 'src/items/CommonQuestionItems/CommonQuestionItems'
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined'
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined'
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined'
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined'
import { Link } from 'react-router-dom'
import CustomLink from 'src/components/CustomLink'
import CustomSelect from 'src/components/Select'
import { selectItems } from 'src/items/FooterItem/FooterItem'
interface Props {}

interface IItemNailTheBasic {
  id: number
  iconSTT: ReactNode
  title: string
}

const itemItemNailTheBasic: IItemNailTheBasic[] = [
  {
    id: 1,
    iconSTT: <LooksOneOutlinedIcon />,
    title: 'The Connect'
  },
  {
    id: 2,
    iconSTT: <LooksTwoOutlinedIcon />,
    title: 'Claim-1-paper'
  },
  {
    id: 3,
    iconSTT: <Looks3OutlinedIcon />,
    title: 'Turn your car into a paycheck'
  },
  {
    id: 4,
    iconSTT: <Looks4OutlinedIcon />,
    title: 'Tips & Trick'
  }
]

const itemLink = [
  {
    id: 1,
    title: 'Maximize your earnings',
    to: '/'
  },
  {
    id: 2,
    title: 'Generate more bookings',
    to: '/'
  },
  {
    id: 3,
    title: 'Power Host Playbook',
    to: '/'
  }
]

const renderItemNailTheBasic = () => {
  return itemItemNailTheBasic?.map((item: any, index: number) => (
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

const GettingStarted = (props: Props) => {
  return (
    <div>
      <div className='mb-mbGettingStarted gap-10'>
        <span className='text-mainColor  text-[11px] font-medium leading-3 text-center uppercase mb-mbGettingStarted'>
          HOSTING 101
        </span>
        <strong className='flex text-textSizeHostingTitle font-medium tracking-tight leading-8 text-left mb-mbGettingStarted mt-[29px]'>
          Getting Started
        </strong>
        <p className='text-white flex flex-start leading-[22.4px] line-clamp-3 text-ellipsis'>
          Onboard and optimize your Getaround business with best practices and recommendations from our team and other
          hosts.
        </p>
      </div>
      <div className='mb-mbGettingStarted'>
        <CustomeCommonQuestions titleClassName='text-white text-[18px] tracking-tight leading-[22.4px]' items={items} className='text-white' />
      </div>
      <div className='mb-mbGettingStarted gap-y-3'>
        <h2 className='text-textSizeHostingTitle tracking-tight leading-8 text-left mb-mbGettingStarted'>Nail the basics</h2>
        <div>
          <p className='text-white mb-mbGettingStarted flex flex-col flex-start leading-5 break-words line-clamp-4 text-ellipsis'>
            Want to learn about our full claims process, our proprietary hardware technology, or how to manage for
            seasonal demand? Start here.
          </p>
        </div>
        <div className='mb-mbGettingStarted'>{renderItemNailTheBasic()}</div>
        <div className='mb-mbGettingStarted'>
          <h2 className='text-textSizeHostingTitle'>Grow your business</h2>
          <p className='my-[29px]'>Ready to grow your business even further? Here are resources and tools that will help you as you scale.</p>
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
