import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { useAppSelector } from 'src/hooks/useRedux'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'src/components/Button'
import { RootState } from 'src/store/store'
export const DataJoinTeamAboutUs = {
  id: 'JoinTeam_AboutUS_AboutUs',
  title: 'Join the Getaround team',
  img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ea9fc9c0cafb2053ba37ac_ga-illustration-19.svg',
  content:
    'Want to work with us? Come join the team focused on empowering people to carshare everywhere. Explore open roles at Getaround.',
  linkTo: '/'
}
const JoinTeam = () => {
  const { JoinTeamAboutUs } = useSelector((state: RootState) => state.AboutUs)
  const data = useAppSelector((state) => state.data.data)
  const dispatch = useDispatch()
  return (
    <div className='flex justify-center bg-[#e9eaeb] rounded-2xl mb-10 sm:flex-col sm:px-3'>
      <div className='w-1/2  flex items-center sm:w-full sm:h-[100px]'>
        <div className='block h-[50%]'>
          <Text
            id={JoinTeamAboutUs.title}
            tag='p'
            content={data[JoinTeamAboutUs.title]}
            className='uppercase text-mainColor font-bold mb-3 text-3xl sm:text-xl'
          />
          {/* <p className='uppercase text-mainColor font-bold mb-3 text-3xl mt-10 sm:text-xl'>Join the Getaround team </p> */}
          <Text
            id={JoinTeamAboutUs.content}
            tag='p'
            content={data[JoinTeamAboutUs.content]}
            className='text-[#808795] font-normal mt-3 sm:text-[15px] mb-5'
          />
          {/* <p className='text-[#808795] font-normal mt-3 sm:text-[15px]'>
            Want to work with us? Come join the team focused on empowering people to carshare everywhere. Explore open
            roles at Getaround.
          </p> */}
          {/* <Link
            to=''
            className='bg-black border py-2 px-4 hover:duration-500 duration-500 hover:transition-all  text-white  border-none hover:bg-mainColor rounded-full items-center w-[135px] h-[40px] text-sm font-bold leading-5  mt-10'
          >
            <Text
              id={JoinTeamAboutUs.link}
              tag='strong'
              content={data[JoinTeamAboutUs.link] || 'Read more'}
              className=''
            />
          </Link> */}
          <Button
            // onClick={onClick}
            children={
              <Text
                id={JoinTeamAboutUs.link}
                tag='span'
                content={data[JoinTeamAboutUs.link] || 's'}
                className={`text-base`}
              />
            }
            isNext={false}
            className='bg-black border py-2 px-4 hover:duration-500 duration-500 hover:transition-all  text-white  border-none hover:bg-mainColor rounded-full items-center w-[135px] h-[40px] text-sm font-bold leading-5  mt-10'
          ></Button>
        </div>
      </div>
      <div className='w-[35%] flex justify-center sm:w-full'>
        <Image
          id={JoinTeamAboutUs.img}
          className='object-contain h-[500px] sm:h-[400px]'
          src={data[JoinTeamAboutUs.img]}
          alt='Getaround Connect®'
        />
        {/* <img
          className='object-contain h-[500px]'
          src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63ea9fc9c0cafb2053ba37ac_ga-illustration-19.svg'
          alt='ss'
        /> */}
      </div>{' '}
    </div>
  )
}

export default JoinTeam
