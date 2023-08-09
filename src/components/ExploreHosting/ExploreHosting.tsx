import { FC, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

interface IExploreHosting {
  mainTitle?: string
  headerTitle?: string
  Title?: string
  Description?: string
  Link?: string
}

type Props = {
  img?: string
  isEx?: boolean
  DataExploreHostingStyle?: any
  DataExploreHostingText?: IExploreHosting
  className?: string
}

const ExploreHosting: FC<Props> = ({ img, isEx, DataExploreHostingStyle, DataExploreHostingText, className }) => {
  return (
    <div className={className}>
      {isEx === true ? (
        <div className='w-full  self-center items-stretch  flex relative'>
          <div className='max-w-[37ch] text-center mx-auto text-mainColor uppercase m-[0_0_24px] text-[11px] font-bold leading-[13px]'>
            {DataExploreHostingText?.mainTitle}
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className='w-full mx-auto flex-col items-start  flex relative sm:flex-col'>
        <div className={`${DataExploreHostingStyle.styleImg}`}>
          <img src={img} loading='lazy' alt='' className='w-full h-full object-fit-cover object-[50%_22%]' />
        </div>
        <div className={`${DataExploreHostingStyle.styleDivRight}`}>
          {isEx === false ? (
            <div className='text-black max-w-[30ch] text-left uppercase m-[0_0_24px] text-[11px] font-bold leading-[13px]'>
              {DataExploreHostingText?.headerTitle}
            </div>
          ) : (
            <></>
          )}
          <div>
            <h2 className={`${DataExploreHostingStyle.styleTitle} md:text-[20px]`}>
              <strong className=''>{DataExploreHostingText?.Title}</strong>
            </h2>
          </div>
          <div className='text-[#727272] mt-[30px]  text-[16px] md:text-13px font-normal mb-4'>
            {DataExploreHostingText?.Description}
            <br />
          </div>

          <Link to={DataExploreHostingText?.Link || ''} className={DataExploreHostingStyle.Button.className}>
            {DataExploreHostingStyle.Button.text}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ExploreHosting
