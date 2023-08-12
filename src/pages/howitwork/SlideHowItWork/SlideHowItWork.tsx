import React from 'react'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { useAppSelector } from 'src/hooks/useRedux'
export const DataSlideHowItWork = {
  id: 'Slide_HowItWork',
  mainTitle: 'Out mission',
  title: 'Chúng tôi kết nối những chiếc xe an toàn, tiện lợi với mọi người',
  img1: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63cef76977f95804643dc7b4_howitworks-guest%20c.jpg',
  content1: 'Người chia sẻ xe hưởng lợi bằng việc tiếp cận linh hoạt đến một phương tiện xe hơi.',
  img2: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63cef77225a91196b5c06fe7_howitworks-host-c.jpg',
  content2: 'Chủ xe hơi kiếm tiền từ những khoảng thời gian họ không lái xe dù sao.'
}
const SlideHowItWork = () => {
  const { ExploreHowItWork, ProprietaryHowItWork, HearCommunityHowItWork, SlideLeftRightHowItWork, SlideHowItWorkR } =
    useSelector((state: RootState) => state.howitwork)

  const data = useAppSelector((state) => state.data.data)
  console.log(SlideHowItWorkR.mainTitle)

  console.log(data[SlideHowItWorkR.img1])
  return (
    <div className='flex-col items-stretch mb-28 flex'>
      <div className='w-full max-w-7xl flex-col self-center items-stretch flex relative'>
        <Text
          id={SlideHowItWorkR.mainTitle}
          tag='div'
          content={data[SlideHowItWorkR.mainTitle]}
          className='max-w-1.5 text-center mx-auto text-mainColor uppercase text-xs font-bold leading-3 mb-6'
        />
        {/* <div className='max-w-1.5 text-center mx-auto text-mainColor uppercase text-xs font-bold leading-3 mb-6'>
          Out mission
        </div> */}
        <Text
          id={SlideHowItWorkR.title}
          tag='h2'
          content={data[SlideHowItWorkR.title]}
          className='max-w-xl text-center mx-auto text-mainColor font-bold text-4xl :selection:bg-mainColor sm:text-sm'
        />
        {/* <h2 className='max-w-xl text-center mx-auto text-mainColor font-bold text-4xl :selection:bg-mainColor sm:text-sm'>
          Chúng tôi kết nối <span className='text-white'>những chiếc xe an toàn, tiện lợi </span> với mọi người
        </h2> */}
      </div>
      <div className='relative'>
        <div className='max-w-[900px] flex justify-center mx-auto ' style={{ gridColumnGap: '34px' }}>
          <div className='w-1/2 flex-col flex-[0_auto] justify-start self-auto items-start mt-9 mx-auto pl-0 flex relative'>
            <Image
              id={SlideHowItWorkR.img1}
              className='ml-auto w-full max-w-[76%] rounded-[20px] mb-10 align-middle border-none inline-block'
              // sizes='(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 991px) 33vw, 329.078125px'
              src={data[SlideHowItWorkR.img1]}
              alt='Getaround Connect®'
            />
            {/* <img
              src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63cef76977f95804643dc7b4_howitworks-guest%20c.jpg'
              loading='lazy'
              sizes='(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 991px) 33vw, 329.078125px'
              srcSet='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63cef76977f95804643dc7b4_howitworks-guest%20c-p-500.jpg 500w, https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63cef76977f95804643dc7b4_howitworks-guest%20c.jpg 665w'
              alt=''
              className='ml-auto w-full max-w-[76%] rounded-[20px] mb-10 align-middle border-none inline-block'
            /> */}
            <div className='w-full bg-white rounded-lg p-10 md:p-5 absolute shadow-[10px_10px_20px_-6px_rgba(0,0,0,0.03)] max-w-[88%] bottom-0'>
              <div className='max-w-[45ch] text-center mt-0 mx-auto text-[#727272] font-normal'>
                <Text
                  id={SlideHowItWorkR.content1}
                  tag='span'
                  content={data[SlideHowItWorkR.content1]}
                  className='text-mainColor '
                />
                {/* <span className='text-mainColor '>Người chia sẻ xe</span> hưởng lợi bằng việc tiếp cận linh hoạt đến một
                phương tiện xe hơi. */}
              </div>
            </div>
          </div>
          <div className='w-1/2 flex-col flex-[0_auto] justify-start self-auto items-start mt-9 mx-auto pl-0 flex relative'>
            <Image
              id={SlideHowItWorkR.img2}
              className='ml-auto w-full max-w-[76%] rounded-[20px] mb-10 align-middle border-none inline-block 
              (max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 991px) 30vw, 300.078125px'
              src={data[SlideHowItWorkR.img2]}
              alt='Getaround Connect®'
            />
            {/* <img
              src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63cef77225a91196b5c06fe7_howitworks-host-c.jpg'
              loading='lazy'
              srcSet='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63cef77225a91196b5c06fe7_howitworks-host-c-p-500.jpg 500w, https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63cef77225a91196b5c06fe7_howitworks-host-c.jpg 665w'
              alt=''
              className='ml-auto w-full max-w-[76%] rounded-[20px] mb-10 align-middle border-none inline-block 
              (max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 991px) 33vw, 329.078125px'
            /> */}
            <div className='w-full bg-white rounded-lg p-10 md:p-5 absolute shadow-[10px_10px_20px_-6px_rgba(0,0,0,0.03)] max-w-[88%] left-44 md:left-[90px] bottom-0 '>
              <div className='max-w-[45ch] text-center mt-0 mx-auto text-[#727272] font-normal'>
                <Text
                  id={SlideHowItWorkR.content2}
                  tag='span'
                  content={data[SlideHowItWorkR.content2]}
                  className='text-mainColor '
                />
                {/* <span className='text-mainColor '>Chủ xe hơi kiếm tiền</span> từ những khoảng thời gian họ không lái xe
                dù sao. */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideHowItWork
