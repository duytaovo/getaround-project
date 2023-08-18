import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { useAppSelector } from 'src/hooks/useRedux'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
const Secure = () => {
  const data = useAppSelector((state) => state.data.data)
  const { Secure } = useSelector((state: RootState) => state.hostBonus)
  return (
    <div className='preserver-3d flex-col items-stretch mb-[104px] flex'>
      <div className='w-full flex-col mx-auto flex max-w-[1024px]'>
        <div className='w-full max-w-[500px] gap-y-[24px] flex-col items-center mx-auto flex'>
          <Text
            id={Secure.headerTitle}
            tag='h2'
            content={data[Secure.headerTitle]}
            className='text-mainColor text-center text-[28px] mb-0 leading-[110%] font-normal'
          ></Text>
          {/* <h2 className='text-mainColor text-center text-[28px] mb-0 leading-[110%] font-normal'>
            Secure your bonus now
          </h2> */}
          <Text
            id={Secure.content}
            tag='div'
            content={data[Secure.content]}
            className='text-white text-[16px] font-light mx-auto text-center mt-0'
          ></Text>
          {/* <div className='text-white text-[16px] font-light mx-auto text-center mt-0'>
            Hosting on Getaround opens a world of opportunity and smarter transportation. Start hosting and making extra
            money now.
          </div> */}
          <Link
            to='/host/share-a-car'
            className='text-center mx-auto h-auto   px-6 py-2 rounded-[20px]  text-mainColor border-[1px] border-mainColor  border-solid hover:bg-mainColor hover:text-white duration-[300ms]'
          >
            <Text
              id={Secure.nameButtonSharecar}
              tag='span'
              content={data[Secure.nameButtonSharecar]}
              className=''
            ></Text>
          </Link>

          <div className='mt-3 text-center mx-auto'>
            <Text id={Secure.footer} tag='span' content={data[Secure.footer]} className=''></Text>
            <Link to='' className='underline text-mainColor font-normal'>
              <Text id={Secure.nameButtonAddCar} tag='span' content={data[Secure.nameButtonAddCar]} className=''></Text>
            </Link>{' '}
            <Text id={Secure.footer2} tag='span' content={data[Secure.footer2]} className=''></Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Secure
