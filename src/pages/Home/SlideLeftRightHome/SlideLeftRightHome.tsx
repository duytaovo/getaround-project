import React, { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { useDispatch, useSelector } from 'react-redux'
import { useAppSelector } from 'src/hooks/useRedux'
import { RootState } from 'src/store/store'
import './style.css'
interface ISlideLR {
  img: string
  label: string
  Linkto: string
  Link: string
  contents: any
}
type Props = {
  Data: ISlideLR[]
  img?: string
  mainTitle?: string
  idimg: string
  idTitle: string
}
const SlideLeftRightHome: FC<Props> = ({ Data, img, mainTitle, idimg, idTitle }) => {
  const dispatch = useDispatch()
  const data = useAppSelector((state) => state.data.data)
  const [valueTimeSlide, setValueTimeSlide] = useState(0)
  console.log(Data.length, valueTimeSlide)
  useEffect(() => {
    const interval = setInterval(() => {
      // Tăng giá trị của valueTimeSlide lên 1
      if (valueTimeSlide >= Data.length) {
        console.log(123)
        setValueTimeSlide(0)
      } else {
        setValueTimeSlide((prevValue) => prevValue + 1)
      }
    }, 5000) // 2 giây

    return () => {
      // Xóa interval khi component bị unmount
      clearInterval(interval)
    }
  }, [])
  return (
    <div
      className='opacity-[1] flex-col items-stretch my-[104px] flex text-[16px] font-normal leading-[140%]'
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className='w-full flex-col items-start  flex relative '>
        <div className='flex-row w-full  mx-auto flex sm:flex-col' style={{ gridColumnGap: '26px' }}>
          <div className='items-center flex w-full flex-col relative'>
            <Image
              id={idimg || ''}
              className='h-full w-full  sm:w-[70%] object-contain max-w-full align-middle inline-block border-0'
              src={
                img ||
                'https://scontent.fsgn5-5.fna.fbcdn.net/v/t45.1600-4/370529291_6400970721433_8110644927075874777_n.jpg?stp=cp0_dst-jpg_p296x100_q75_spS444&_nc_cat=100&ccb=1-7&_nc_sid=67cdda&_nc_ohc=l4SsWefw4HEAX_QCqzJ&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfBPWSN4ng4HB1p4gEsViemFJXBTMhjh2b0ENHF9MafeDQ&oe=65038AE5'
              }
              alt='Getaround Connect®'
            />
            {/* <img
                src={Data?.[0]?.img}
                alt=''
                className='h-full w-full max-h-[316px] sm:w-[70%] object-contain max-w-full align-middle inline-block border-0'
              /> */}
          </div>
          <div className='items-start flex w-full flex-col relative'>
            <Text
              id={idTitle || ''}
              tag='h2'
              content={
                mainTitle ||
                'Monetize flexible action items before mission critical rabidly intuitive Credit extend wireless experiences. Collaboratively transition emerging potentialities for high-payoff imperative. Continually impact technically sound sources without. Synergistically benchmark one-to-one web-readiness rather than intermediated information.'
              }
              className='pb-0 text-mainColor max-w-[30ch] text-left uppercase m-[0_0_24px] text-[11px] sm:text-[12px] font-bold leading-[13px]'
            />
            {/* <h2 className='pb-0 text-mainColor max-w-[30ch] text-left uppercase m-[0_0_24px] text-[11px] sm:text-[12px] font-bold leading-[13px]'>
                {mainTitle}
              </h2> */}

            <div className='block mb-9'>
              <Text
                id={Data?.[valueTimeSlide]?.label}
                tag='h2'
                content={data[Data?.[valueTimeSlide]?.label] || 'content'}
                className='text-black mt-0 mb-[10px] text-[32px] sm:text-[15px] font-bold leading-[106%] uppercase'
              />
              {/* <h2 className='text-[#fff] mt-0 mb-[10px] text-[32px] sm:text-[15px] font-medium leading-[106%]'>
                    {Data?.[index]?.label}
                  </h2> */}
              {Data?.[valueTimeSlide]?.contents.map((item: any, indexx: any) => (
                <Text
                  id={Data?.[valueTimeSlide]?.contents?.[indexx]}
                  tag='div'
                  content={data[Data?.[valueTimeSlide]?.contents?.[indexx]] || 'content'}
                  className='text-black sm:text-[12px]'
                />
              ))}

              {/* <div className='text-[#fff] sm:text-[12px]'>
                    <Link to={Data?.[index]?.Linkto || ''} className='no-underline text-mainColor'>
                      {Data?.[index]?.Link}
                    </Link>{' '}
                    {Data?.[index]?.contents}
                  </div> */}
            </div>

            <div className='button'>
              <Text
                id={Data?.[0]?.Link}
                tag='div'
                content={data[Data?.[0]?.Link] || 'content'}
                className='mx-auto'
                style={{ border: 'none' }}
              />
            </div>

            {/* <Link to={data[Data?.[0]?.Linkto]} className='underline text-mainColor font-semibold'>
                {data[Data?.[0]?.Link]}
              </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default SlideLeftRightHome
