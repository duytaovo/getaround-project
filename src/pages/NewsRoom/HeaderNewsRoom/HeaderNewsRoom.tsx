import React from 'react'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { iDGenerator } from 'src/utils/idGenerator'
import { useAppSelector } from 'src/hooks/useRedux'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
export const DataHeaderNewsRoom = {
  id: 'header_AboutUs_NewsRoom',
  img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c98c83e7bffe6581cd4811_AdobeStock_516425442%202%20compress.jpg',
  title: 'Explore Getaround in the news',
  content: 'Welcome to our press room. Find our latest press releases and new media coverage of our company.',
  titleButton: 'For media inquiries,',
  email: 'please contact us at press@getaround.com.'
}
const HeaderNewsRoom = () => {
  const { CarouselNewsRoom, TitleCarouselNewsRoom, HeaderNewsRoom } = useSelector((state: RootState) => state.newsroom)
  const data = useAppSelector((state) => state.data.data)
  const dispatch = useDispatch()
  return (
    <div className='flex-col items-stretch mb-[104px] flex'>
      <div className='w-full  flex-col self-center items-stretch  flex relative'>
        <div
          className='bg-[50%_58%]  bg-scroll rounded-[24px] flex-col justify-center items-center p-9 flex w-full'
          style={{
            backgroundImage: ` url("https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63c98c83e7bffe6581cd4811_AdobeStock_516425442%202%20compress.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 58%',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className='gap-x-[56px] flex-row w-[100%] mx-auto flex'>
            <div className='w-[60%] sm:w-full flex-col flex-[0_auto] justify-start self-auto items-start mt-9 mx-auto pl-0 flex relative'>
              <h1 className='tracking-[-.04em] mb-0 mx-0 pb-0 text-[52px] font-semibold leading-[99%] mt-0 text-left max-w-[40ch]'>
                <Text
                  id={data[HeaderNewsRoom.title]}
                  tag='span'
                  content={data[HeaderNewsRoom.title]}
                  className='text-white'
                />
                {/* <span className='text-white'>Explore Getaround in the news</span> */}
              </h1>
              <Text
                id={data[HeaderNewsRoom.content]}
                tag='div'
                content={data[HeaderNewsRoom.content]}
                className='text-white font-normal max-w-[40ch] mt-8'
              />
              {/* <div className='text-white font-normal max-w-[40ch] mt-8'>
                Welcome to our press room. Find our latest press releases and new media coverage of our company.
              </div> */}
              <div className='bg-white h-[100px] py-5 px-10 rounded-xl max-w-[45ch] flex items-center mt-10'>
                <p className='text-black'>
                  <Text
                    id={data[HeaderNewsRoom.titleButton]}
                    tag='p'
                    content={data[HeaderNewsRoom.titleButton]}
                    className=''
                  />
                  {/* {DataHeaderNewsRoom.titleButton} */}
                  <Text
                    id={data[HeaderNewsRoom.email]}
                    tag='span'
                    content={data[HeaderNewsRoom.email]}
                    className='text-mainColor'
                  />
                  {/* <span className='text-mainColor'>please contact us at press@getaround.com.</span> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderNewsRoom
