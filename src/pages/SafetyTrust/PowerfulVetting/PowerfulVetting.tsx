import React from 'react'
import { CarOutlined, KeyOutlined, ReloadOutlined } from '@ant-design/icons'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { useDispatch, useSelector } from 'react-redux'
import { useAppSelector } from 'src/hooks/useRedux'
import { RootState } from 'src/store/store'
export const DataPowerFullSafeTrust = {
  id: 'PowerFullSafeTrust',
  img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/648380f3f2fadb5289320a68_ga-illustration-4.svg',
  headerTitle: 'For Hosts',
  title: 'POWERFUL VETTING & FRAUD DETECTION SYSTEM',
  content: [
    {
      titleSpan: 'Getaround uses advanced identity verification ',
      titleH2:
        'technologies and a thorough screening process to ensure that every Getaround guest meets our guidelines.'
    },
    {
      titleSpan: 'Every Getaround guest must meet our eligibility criteria ',
      titleH2:
        ' in order to rent. To verify guests’ eligibility, we obtain their driving records from the Department of Motor Vehicles. ‍'
    },
    {
      titleSpan: 'A team of dedicated experts agents the latest ',
      titleH2:
        'risk detection technologies to protect hosts by identifying and preventing fraudulent activity on our platform.'
    }
  ]
}

const PowerfulVetting = () => {
  const { PowerFullST } = useSelector((state: RootState) => state.safetrust)
  const dispatch = useDispatch()
  const data = useAppSelector((state) => state.data.data)
  return (
    <div
      className='opacity-[1] flex-col items-stretch mb-[104px] flex text-[16px] font-normal leading-[140%]'
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Text
        id='titleHeaderPowefull'
        tag='h2'
        content={data[PowerFullST.headerTitle]}
        className='text-mainColor font-semibold text-4xl text-center mb-[40px]'
      />
      {/* <h2 className='text-mainColor font-semibold text-4xl text-center mb-[40px]'>For Hosts</h2> */}
      <div className='w-full flex-col items-start  flex relative '>
        <div className='flex-row w-full max-w-[1080px] mx-auto flex sm:flex-col' style={{ gridColumnGap: '26px' }}>
          <div className='items-center flex w-full flex-col relative'>
            <Image
              id='imgPowerFull'
              className='h-full w-full max-h-[316px] object-contain max-w-full align-middle inline-block border-0 '
              src={data[PowerFullST.img]}
              alt='Getaround Connect®'
            />
            {/* <img
              src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/648380f3f2fadb5289320a68_ga-illustration-4.svg'
              alt=''
              className='h-full w-full max-h-[316px] object-contain max-w-full align-middle inline-block border-0 '
            /> */}
          </div>
          <div className='items-start flex w-full flex-col relative '>
            <CarOutlined className='text-mainColor font-normal text-[32px] mb-6 sm:text-[20px] sm:tex-center' />
            <Text
              id='titlePowefull'
              tag='h2'
              content={data[PowerFullST.title]}
              className='pb-0 text-mainColor text-left uppercase m-[0_0_24px] text-[30px] font-bold leading-[32px] sm:text-[20px] sm:leading-[20px] sm:text-center'
            />
            {/* <h2 className='pb-0 text-mainColor text-left uppercase m-[0_0_24px] text-[30px] font-bold leading-[32px] sm:text-[20px] sm:leading-[20px] sm:text-center'>
              Powerful vetting & fraud detection system
            </h2> */}
            <ul>
              {PowerFullST?.content?.map((item, index) => (
                <li className='text-white mb-3 sm:text-[15px]'>
                  <Text
                    id='titleSpanPowefull'
                    tag='span'
                    content={data[PowerFullST.content?.[index]?.titleSpan]}
                    className='text-mainColor sm:text-[15px]'
                  />
                  {/* <span className='text-mainColor sm:text-[15px]'>
                    {' '}
                    {DataPowerFullSafeTrust?.content?.[index]?.titleSpan}{' '}
                  </span> */}
                  <Text
                    id='contentPowefull'
                    tag='span'
                    content={data[PowerFullST.content?.[index]?.titleH2]}
                    className=''
                  />
                  {/* {DataPowerFullSafeTrust?.content?.[index]?.titleH2} */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PowerfulVetting
