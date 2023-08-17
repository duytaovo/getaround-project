import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'src/hooks/useRedux'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { MobileOutlined, CarOutlined, RiseOutlined, DollarOutlined, WalletOutlined } from '@ant-design/icons'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
interface Props {
  mainTitle: string
  DataCustomeCard?: any
}
const CustomeCard: React.FC<Props> = ({ mainTitle, DataCustomeCard }) => {
  const {
    ExplorehostRefernal,
    customeSteps,
    imgcustomeSteps,
    SlideLeftRighthostRefernal,
    ImgSlideLeftRight_HostRefernal,
    ImgExploreHR,
    QuestionhostRefernal,
    CustomeCardR
  } = useSelector((state: RootState) => state.hostingReferral)
  const data = useAppSelector((state) => state.data.data)
  return (
    <div className='flex-col items-stretch mb-[104px] flex w-full sm:flex-row'>
      <div className='w-full flex-col self-center items-stretch flex relative'>
        <div className='w-full  flex-col mx-auto flex'>
          <Text
            id={mainTitle}
            tag='h2'
            content={data[mainTitle]}
            className=' text-center mx-auto text-mainColor uppercase m-[0_0_24px] text-[11px] font-bold leading-[13px]'
          />
          {/* <h2 className=' text-center mx-auto text-mainColor uppercase m-[0_0_24px] text-[11px] font-bold leading-[13px]'>
            {mainTitle}
          </h2> */}
          <div className='gap-x-[18px] flex justify-around sm:flex-col'>
            {DataCustomeCard.map((item: any, index: any) => (
              <div
                className='w-[33%] sm:w-[100%] sm:mb-2 gap-x-[18px] bg-white rounded-[28px] flex-col items-start p-[42px_42px_56px] flex md:p-[30px_30px_45px] '
                key={index}
              >
                <div>
                  <Text
                    id={CustomeCardR?.[index]?.header}
                    tag='div'
                    content={data[CustomeCardR?.[index]?.description]}
                    className='mt-[6px] text-[30px] md:text-[25px] font-bold block  box-border leading-[140%] text-mainColor '
                  />
                  {/* <div className='mt-[6px] text-[30px] md:text-[25px] font-bold block  box-border leading-[140%] text-mainColor '>
                    {DataCustomeCard?.[index]?.header}
                  </div> */}
                </div>
                <h3 className={`${DataCustomeCard?.[index]?.styleTitle} md:text-[20px]`}>
                  <Text
                    id={CustomeCardR?.[index]?.title}
                    tag='strong'
                    content={data[CustomeCardR?.[index]?.title]}
                    className=''
                  />
                  {/* <strong>
                    {DataCustomeCard?.[index]?.title} <br />
                  </strong> */}
                </h3>
                <div className={`${DataCustomeCard?.[index]?.styleDes}`}>
                  <Text
                    id={CustomeCardR?.[index]?.description}
                    tag='p'
                    content={data[CustomeCardR?.[index]?.description]}
                    className=' no-underline bg-transparent'
                  />
                  {/* <p className=' no-underline bg-transparent'>{DataCustomeCard?.[index]?.description}</p> */}
                </div>
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
