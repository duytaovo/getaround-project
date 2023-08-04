import React, { ReactNode } from 'react'
import CustomeCommonQuestions from 'src/components/CustomeCommonQuestions/CustomeCommonQuestions'
import { items } from 'src/items/CommonQuestionItems/CommonQuestionItems'
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined';
interface Props {

}

interface IItemNailTheBasic {
    id:number
    index:ReactNode
    title:string
}

const item:IItemNailTheBasic[]=[
    {
        id:1,
        index:<LooksOneOutlinedIcon/>,
        title:"The Connect"
    },
    {
        id:2,
        index:<LooksTwoOutlinedIcon/>,
        title:"Claim-1-paper"
    },
    {
        id:3,
        index:<Looks3OutlinedIcon/>,
        title:"Turn your car into a paycheck"
    },
    {
        id:4,
        index:<Looks4OutlinedIcon/>,
        title:"Tips & Trick"
    },
]

const ItemNailTheBasic = () =>{
    return (
        <div>
        </div>
    )
}

const GettingStarted = (props: Props) => {
  return (
    <div>
      <span className='text-mainColor text-[11px] font-medium leading-3 text-center uppercase'>HOSTING 101</span>
      <strong className='flex text-[32px] font-medium tracking-tight leading-8 text-left'>Getting Started</strong>
      <div>
        <p className='text-[#727272] flex flex-start leading-[22.4px] line-clamp-3 text-ellipsis'>
          Onboard and optimize your Getaround business with best practices and recommendations from our team and other
          hosts.
        </p>
      </div>
      <div>
        <CustomeCommonQuestions items={items} className='text-white' />
      </div>
      <div>
        <h2 className='text-[32px] tracking-tight leading-8 text-left'>Nail the basics</h2>
        <div>
          <p className='text-[#727272] flex flex-col flex-start leading-5 break-words line-clamp-4 text-ellipsis'>
            Want to learn about our full claims process, our proprietary hardware technology, or how to manage for
            seasonal demand? Start here.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default GettingStarted
