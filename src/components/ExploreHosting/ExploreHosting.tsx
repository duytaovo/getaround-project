import { FC, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
interface IExploreHosting {
  id?: string
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
          <Text
            id='Explore-mainTitle'
            tag='div'
            content={DataExploreHostingText?.Description || ''}
            className='max-w-[37ch] text-center mx-auto text-mainColor uppercase m-[0_0_24px] text-[11px] font-bold leading-[13px]'
          />
          {/* <div className='max-w-[37ch] text-center mx-auto text-mainColor uppercase m-[0_0_24px] text-[11px] font-bold leading-[13px]'>
            {DataExploreHostingText?.[0]?.mainTitle}
          </div> */}
        </div>
      ) : (
        <></>
      )}
      <div className='w-full mx-auto flex-col items-start  flex relative sm:flex-col'>
        <div className={`${DataExploreHostingStyle.styleImg}`}>
          <Image
            id='Explore-img'
            className='w-full h-full object-fit-cover object-[50%_22%]'
            src={img || ''}
            alt='Getaround Connect®'
          />
          {/* <img src={img} loading='lazy' alt='' className='w-full h-full object-fit-cover object-[50%_22%]' /> */}
        </div>
        <div className={`${DataExploreHostingStyle.styleDivRight}`}>
          {isEx === false ? (
            <Text
              id='Explore-headerTitle'
              tag='div'
              content={DataExploreHostingText?.headerTitle || ''}
              className='text-black max-w-[30ch] text-left uppercase m-[0_0_24px] text-[11px] font-bold leading-[13px]'
            />
          ) : (
            // <div className='text-black max-w-[30ch] text-left uppercase m-[0_0_24px] text-[11px] font-bold leading-[13px]'>
            //   {DataExploreHostingText?.[0]?.headerTitle}
            // </div>
            <></>
          )}
          <div>
            <h2 className={`${DataExploreHostingStyle.styleTitle} md:text-[20px]`}>
              <Text
                id='Explore-headerTitle'
                tag='strong'
                content={DataExploreHostingText?.Title || ''}
                // className='text-black max-w-[30ch] text-left uppercase m-[0_0_24px] text-[11px] font-bold leading-[13px]'
              />
              {/* <strong className=''>{DataExploreHostingText?.[0]?.Title}</strong> */}
            </h2>
          </div>
          <Text
            id='Explore-Description'
            tag='div'
            content={DataExploreHostingText?.Description || ''}
            className='text-[#727272] mt-[30px]  text-[16px] md:text-13px font-normal mb-4'
          />
          {/* <div className='text-[#727272] mt-[30px]  text-[16px] md:text-13px font-normal mb-4'>
            {DataExploreHostingText?.[0]?.Description}
            <br />
          </div> */}
          <Text
            id='Explore-Buttontext'
            // to=""
            tag='div'
            content={DataExploreHostingStyle.Button.text || ''}
            className={DataExploreHostingStyle.Button.className}
          />
          {/* <Link to={DataExploreHostingText?.[0]?.Link || ''} className={DataExploreHostingStyle.Button.className}>
            {DataExploreHostingStyle.Button.text}
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default ExploreHosting
