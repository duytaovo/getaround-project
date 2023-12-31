import { Grid } from '@mui/material'
import { Col, Row } from 'antd'
import ExploreHosting from 'src/components/ExploreHosting/ExploreHosting'
import { useAppSelector } from 'src/hooks/useRedux'
import { DataExploreHostingShareCar } from 'src/items/ExploreHosting/DataExploreHostingStyle'
import Banner from './components/Banner/Banner'
import CardBody from './components/CardBody'
import { CardBodyParnerDeal, CardBodyReferFriend } from './components/CardBody/CardBody'
import Carousel_Review_Comunity from './components/Carousel/Carousel_Review'
import GettingStarted from './components/GettingStarted/GettingStarted'
import OurHost from './components/OurHost/OurHost'
import SliderHostComunity from './components/Slider/Slider'
import TopHostComunity from './components/TopHostCommunity/OurHost'
import { Helmet } from 'react-helmet-async'

const HostCominity = () => {
  const {
    carouselCommunity,
    ourHost,
    bannerCommunity,
    cardBodyImg1,
    cardBodyImg2,
    cardBodyImg3,
    cardBodyParnerDeal,
    cardBodyReferFriend,
    sliderHostComunity,
    gettingStartedNailBasic,
    topGettingStarted,
    imgGettingStarted,
    exploreHosting,
    imgExploreHosting,
    cardBodyButton,
    itemLink,
    itemLinkNailTheBasic,
    topHostCommunity
  } = useAppSelector((state) => state.community)

  const data = useAppSelector((state) => state.data.data)

  return (
    <div className='mt-[33px]'>
      <Helmet>
        <title>Benefit</title>
        <meta name='description' content='Trang lợi ích xe' />
      </Helmet>
      {/* start slider */}
      <div className=' mb-bottom py-5 rounded-2xl'>
        <TopHostComunity item={topHostCommunity} />
        <SliderHostComunity breakPoint={[2, 2, 2.5, 3]} breakPointScroll={[1, 1, 1, 1]} data={sliderHostComunity} />
      </div>
      {/* end slider */}
      {/* start card */}
      <div className='mb-bottom flex justify-around  flex-wrap '>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={3}>
            <CardBody.CardBodyImg itemCardBodyImg={cardBodyImg1} id={1} />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <CardBody.CardBodyImg itemCardBodyImg={cardBodyImg2} id={2} />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <CardBody.CardBodyImg itemCardBodyImg={cardBodyImg3} id={3} />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <CardBody.CardBodyButton item={cardBodyButton} />
          </Grid>
        </Grid>
      </div>
      {/* end card */}

      {/* start area scroll */}
      <div className='flex justify-between items-center gap-5 mb-bottom'>
        <Row gutter={16}>
          <Col span={12} className='relative ml-auto mr-auto mt-[36px] '>
            {/* <div className=' bg-white rounded-md relative ml-auto mr-auto mt-[36px]'> */}
            {/* <Image
              id={`img_gettingStarted_hostCommunity`}
              className='sticky bg-white rounded-2xl  object-contain max-h-[400px] w-[95%] top-1/3'
              src={data[imgGettingStarted || '']}
              alt='hosting-community'
            /> */}
            <img
              src={data[imgGettingStarted || '']}
              alt=''
              className='sticky bg-white rounded-2xl  object-contain max-h-[400px] w-[95%] top-1/3'
            />
            {/* </div> */}
          </Col>
          <Col span={12}>
            <div className=' gap-y-4'>
              <GettingStarted
                itemLinkNailTheBasic={itemLinkNailTheBasic}
                itemLink={itemLink}
                itemTopGettingStarted={topGettingStarted}
                itemGettingStarted={gettingStartedNailBasic}
              />
            </div>
          </Col>
        </Row>
      </div>
      {/* end area scroll */}

      {/* start banner the new onboard */}
      <div className='mb-bottom rounded-2xl w-[100%]'>
        <div className='w-full  ml-auto pl-[36px] pr-9 mr-9'>
          <Banner item={bannerCommunity} />
        </div>
      </div>
      {/* end banner the new onboard */}

      {
        /* start card Partner,deal*/
        <div className='flex mb-[75px]'>
          <Grid container spacing={2}>
            <Grid item sm={12} md={8}>
              <CardBodyParnerDeal itemCardBodyParnerDeal={cardBodyParnerDeal} />
            </Grid>
            <Grid item sm={12} md={4}>
              <CardBodyReferFriend itemCardBodyReferFriend={cardBodyReferFriend} />
            </Grid>
          </Grid>
        </div>
        /* end card Partner,deal*/
      }

      {
        /* start card Partner,deal*/
        <div className='mb-bottom gap-x-5'>
          <OurHost item={ourHost} />
          <Carousel_Review_Comunity
            prefix='reviewCommunity'
            className='m-4'
            data={carouselCommunity}
            numberItem={2}
            numberItemScroll={1}
          />
        </div>
      }

      {
        // start exploreHosting
        <div className='mb-[200px]'>
          <ExploreHosting
            img={imgExploreHosting.img}
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
