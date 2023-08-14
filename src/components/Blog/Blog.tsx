import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from 'src/components/Edition/Text'
import { Image } from 'src/components/Edition/Image'
import { useAppSelector } from 'src/hooks/useRedux'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
export const DataBlogNewsRoom = {
  id: 'Blog_AboutUS_NewsRoom',
  img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63dc05d87b4b95cb44c4ef9f_getaroundblog%20Grande.jpeg',
  headerTitle: 'THE GETAROUND BLOG',
  mainTitle: 'Discover the Getaround blog',
  content:
    ' Explore the collection of stories, news, and other resources for hosts, guests, and partners throughout the  Getaround carsharing community.',
  linkTo: '/'
}
export const DataBlogAboutUs = {
  id: 'Blog_AboutUS_AboutUs',
  img: 'https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63dc05d87b4b95cb44c4ef9f_getaroundblog%20Grande.jpeg',
  headerTitle: 'THE GETAROUND BLOG',
  mainTitle: 'Discover the Getaround blog',
  content:
    ' Explore the collection of stories, news, and other resources for hosts, guests, and partners throughout the  Getaround carsharing community.',
  linkTo: '/'
}
const Blog = () => {
  const { BlogNewsRoom } = useSelector((state: RootState) => state.AboutUs)
  const data = useAppSelector((state) => state.data.data)
  const dispatch = useDispatch()
  return (
    <div className='flex justify-center h-auto w-full mb-16 md:mb-24 sm:flex-col sm:mb-20'>
      <Image
        id={BlogNewsRoom.img}
        style={{ width: '500px' }}
        className='object-contain rounded-2xl w-full flex justify-center mr-5 md:rounded-2xl sm:w-full'
        src={data[BlogNewsRoom.img]}
        alt='Getaround Connect®'
      />
      {/* <img
        className='object-contain rounded-2xl w-1/2 flex justify-center mr-5 md:rounded-2xl sm:w-full'
        src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63dc05d87b4b95cb44c4ef9f_getaroundblog%20Grande.jpeg'
        alt='ss'
      /> */}

      <div className='w-1/2  flex justify-center items-center sm:w-full sm:mt-6'>
        <div className='block h-[50%]'>
          <Text
            id={BlogNewsRoom.headerTitle}
            tag='p'
            content={data[BlogNewsRoom.headerTitle]}
            className='uppercase text-mainColor font-semibold mb-8 text-[10px]'
          />
          {/* <p className='uppercase text-mainColor font-semibold mb-8 text-[10px]'>THE GETAROUND BLOG</p> */}
          <h2 className='text-3xl  font-bold mb-4 sm:text-xl'>
            <Text
              id={BlogNewsRoom.mainTitle}
              tag='span'
              content={data[BlogNewsRoom.mainTitle]}
              className=' text-mainColor '
            />
            {/* <span className='text-mainColor'>Discover the Getaround blog</span> */}
          </h2>
          <Text
            id={BlogNewsRoom.content}
            tag='p'
            content={data[BlogNewsRoom.content]}
            className='text-white font-normal my-6 sm:text-[15px]'
          />
          {/* <p className='text-white font-normal my-6 sm:text-[15px]'>
            Explore the collection of stories, news, and other resources for hosts, guests, and partners throughout the
            Getaround carsharing community.
          </p> */}
          <Link
            to='/'
            className='text-mainColor underline hover:text-black hover:no-underline cursor-pointer duration-[0.5s]'
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Blog
