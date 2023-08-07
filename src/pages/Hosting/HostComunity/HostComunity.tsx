import React from 'react'
import SliderHostComunity from './components/Slider/Slider'
import { changeColorWhiteAndMain } from 'src/helpers/getBreakpoint'
import CardBody from './components/CardBody'
import GettingStarted from './components/GettingStarted/GettingStarted'
import { Col, Row } from 'antd'
import Banner from './components/Banner/Banner'
import { CardBodyParnerDeal, CardBodyReferFriend } from './components/CardBody/CardBody'
import Carousel_Review_Comunity from './components/Carousel/Carousel_Review'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { DataExploreHostingShareCar } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import { useAppSelector } from 'src/hooks/useRedux'


const HostCominity = () => {
  const {CarouselCommunity,exploreHosting,bannerCommunity,cardBodyImg,cardBodyParnerDeal,cardBodyReferFriend,gettingStarted,sliderHostComunity} = useAppSelector((state) => state.community);

  const text = 'Featured news & updates'
  return (
    <div className='mt-[33px]'>
      {/* start slider */}
      <div className=' mb-bottom py-5 rounded-2xl'>
        <div className='flex flex-col justify-center items-center'>
          <span className='text-sm font-medium leading-4 text-center uppercase'>HOST COMMUNITY</span>
          <span className='text-[58px] font-medium tracking-tight'>{changeColorWhiteAndMain(text.split(' '))}</span>
        </div>
        <SliderHostComunity numberItem={3} numberItemScroll={3} data={sliderHostComunity} />
      </div>
      {/* end slider */}
      {/* start card */}
      <div className='mb-bottom flex gap-3'>
        <CardBody.CardBodyImg itemCardBodyImg={cardBodyImg} />
        <CardBody.CardBodyImg itemCardBodyImg={cardBodyImg} />
        <CardBody.CardBodyImg itemCardBodyImg={cardBodyImg} />
       
        <CardBody.CardBodyButton />
      </div>
      {/* end card */}

      {/* start area scroll */}
      <div className='flex justify-between items-center gap-5 mb-bottom'>
        <Row gutter={16}>
          <Col span={12} className='relative ml-auto mr-auto mt-[36px]'>
            {/* <div className=' bg-white rounded-md relative ml-auto mr-auto mt-[36px]'> */}
            <img
              src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ec0b73b2f4fb34b18ddb8a_ga-illustration-8.svg'
              alt=''
              className='sticky  object-contain max-h-[400px] w-full top-1/3'
            />
            {/* </div> */}
          </Col>
          <Col span={12}>
            <div className=' gap-y-4'>
              <GettingStarted itemGettingStarted={gettingStarted}/>
            </div>
          </Col>
        </Row>
      </div>
      {/* end area scroll */}

      {/* start banner the new onboard */}
      <div className='mb-bottom rounded-2xl w-[100%]'>
        <div className='w-full  ml-auto pl-[36px] pr-9 mr-9'>
          <Banner item={bannerCommunity}/>
        </div>
      </div>
      {/* end banner the new onboard */}

      {
        /* start card Partner,deal*/
        <div className='flex mb-[75px]'>
          <div className='w-2/3 mr-5'>
            <CardBodyParnerDeal itemCardBodyParnerDeal={cardBodyParnerDeal}/>
          </div>
          <div className='w-1/3'>
            <CardBodyReferFriend itemCardBodyReferFriend={cardBodyReferFriend}/>
          </div>
        </div>
        /* end card Partner,deal*/
      }

      {
        /* start card Partner,deal*/
        <div className='mb-bottom gap-x-5'>
          <span className='text-mainColor font-medium text-center uppercase leading-3 flex justify-center mb-2'>
            COMUNITY
          </span>
          <h2 className=' flex text-[32px] text-center  justify-center mb-2'>
            Our hosts have earned over $390M to date
          </h2>
          <Carousel_Review_Comunity
            className='m-4'
            data={CarouselCommunity}
            numberItem={2}
            numberItemScroll={1}
          />
        </div>
      }

      {
        // start exploreHosting
        <div className='mb-[200px]'>
          <ExploreHosting
            img={
              'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c5b458858ce546324e6786_636056a89c0f36b634f4dc4e_AdobeStock_488832115%20copiar.jpg'
            }
            DataExploreHostingStyle={DataExploreHostingShareCar}
            DataExploreHostingText={exploreHosting}
            isEx={false}
            className=''
          />
        </div>
        // end exploreHosting
      }
    </div>
  )
}

export default HostCominity
