import React from 'react'
import { Link } from 'react-router-dom'
const Blog = () => {
  return (
    <div className='flex justify-center h-full w-full mb-16'>
      <div className='w-1/2 flex justify-center mr-5 rounded-2xl'>
        <img
          className='object-contain  rounded-2xl'
          src='https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63dc05d87b4b95cb44c4ef9f_getaroundblog%20Grande.jpeg'
          alt='ss'
        />
      </div>
      <div className='w-1/2  flex justify-center items-center '>
        <div className='block h-[50%]'>
          <p className='uppercase text-mainColor font-semibold mb-8 text-[10px]'>THE GETAROUND BLOG</p>
          <h2 className='text-3xl  font-bold mb-4'>
            <span className='text-mainColor'>Discover the Getaround blog</span>
          </h2>

          <p className='text-white font-normal my-6 '>
            Explore the collection of stories, news, and other resources for hosts, guests, and partners throughout the
            Getaround carsharing community.
          </p>
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
