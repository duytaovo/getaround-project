import React from 'react'
interface Props {
  img: string
  isEx: boolean
  DataExploreHostingStyle: any
  DataExploreHostingText: any
}
const ExploreHosting: React.FC<Props> = ({ img, isEx, DataExploreHostingStyle, DataExploreHostingText }) => {
  return (
    <div className='flex-col items-center mb-[104px] flex'>
      {isEx === true ? (
        <div className='w-full max-w-[1272px] self-center items-stretch  flex relative'>
          <div className='max-w-[37ch] text-center mx-auto text-mainColor uppercase m-[0_0_24px] text-[11px] font-bold leading-[13px]'>
            {DataExploreHostingText.mainTitle}
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className='w-full max-w-[1000px] mx-auto flex-col items-start pb-[66px] flex relative'>
        <div className={`${DataExploreHostingStyle.styleImg}`}>
          <img
            src={img}
            loading='lazy'
            sizes='(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 1439px) 93vw, 1000px'
            alt=''
            className='w-full h-full object-fit-cover object-[50%_22%]'
          />
        </div>
        <div className={`${DataExploreHostingStyle.styleDivRight}`}>
          {isEx === false ? (
            <div className='text-black max-w-[30ch] text-left uppercase m-[0_0_24px] text-[11px] font-bold leading-[13px]'>
              {DataExploreHostingText.headerTitle}
            </div>
          ) : (
            <></>
          )}
          <div>
            <h2 className={`${DataExploreHostingStyle.styleTitle}`}>
              <strong className=''>{DataExploreHostingText.Title}</strong>
            </h2>
          </div>
          <div className='text-[#727272] mt-[30px]  text-[16px] font-normal mb-4'>
            {DataExploreHostingText.Description}
            <br />
          </div>

          <a href='' className={DataExploreHostingStyle.Button.className}>
            {DataExploreHostingStyle.Button.text}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ExploreHosting
