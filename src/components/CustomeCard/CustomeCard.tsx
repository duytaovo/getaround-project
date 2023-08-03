import React from 'react'
interface Props {
  mainTitle?: string
  DataCustomeCard: any
}
const CustomeCard: React.FC<Props> = ({ mainTitle, DataCustomeCard }) => {
  return (
    <div className='flex-col items-stretch mb-[104px] flex'>
      <div className='w-full max-w-full flex-col self-center items-stretch flex relative'>
        <div className='w-full max-w-[1080px] flex-col mx-auto px-9 flex'>
          <h2 className='max-w-[37ch] text-center mx-auto text-mainColor uppercase m-[0_0_24px] text-[11px] font-bold leading-[13px]'>
            {mainTitle}
          </h2>
          <div className='gap-x-[18px] flex'>
            {DataCustomeCard.map((item: any, index: any) => (
              <div
                className='w-[33%] gap-x-[18px] bg-white rounded-[28px] flex-col items-start p-[42px_42px_56px] flex'
                key={index}
              >
                <div>{DataCustomeCard?.[index]?.header}</div>
                <h3 className={`${DataCustomeCard?.[index]?.styleTitle}`}>
                  <strong className='font-[bolder]'>
                    {DataCustomeCard?.[index]?.title} <br />
                  </strong>
                </h3>
                <div className={`${DataCustomeCard?.[index]?.styleDes}`}>{DataCustomeCard?.[index]?.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomeCard
