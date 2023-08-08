import React from 'react'
import { Link } from 'react-router-dom'
interface Props {
  mainTitle?: string
  DataCustomeCard?: any
}
const CustomeCard: React.FC<Props> = ({ mainTitle, DataCustomeCard }) => {
  return (
    <div className='flex-col items-stretch mb-[104px] flex w-full sm:flex-row'>
      <div className='w-full flex-col self-center items-stretch flex relative'>
        <div className='w-full  flex-col mx-auto flex'>
          <h2 className=' text-center mx-auto text-mainColor uppercase m-[0_0_24px] text-[11px] font-bold leading-[13px]'>
            {mainTitle}
          </h2>
          <div className='gap-x-[18px] flex justify-around sm:flex-col'>
            {DataCustomeCard.map((item: any, index: any) => (
              <div
                className='w-[33%] sm:w-[100%] sm:mb-2 gap-x-[18px] bg-white rounded-[28px] flex-col items-start p-[42px_42px_56px] flex md:p-[30px_30px_45px] '
                key={index}
              >
                <div>{DataCustomeCard?.[index]?.header}</div>
                <h3 className={`${DataCustomeCard?.[index]?.styleTitle} md:text-[20px]`}>
                  <strong>
                    {DataCustomeCard?.[index]?.title} <br />
                  </strong>
                </h3>
                <div className={`${DataCustomeCard?.[index]?.styleDes}`}>{DataCustomeCard?.[index]?.description}</div>
                <Link to={DataCustomeCard?.[index]?.LinkFooter} className='text-mainColor font-light mt-3'>
                  {DataCustomeCard?.[index]?.Footer}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomeCard
