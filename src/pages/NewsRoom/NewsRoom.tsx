import React from 'react'
import HeaderNewsRoom from './HeaderNewsRoom/HeaderNewsRoom'
import Blog from 'src/components/Blog/Blog'
import HelpCustomer from './HelpCustomer/HelpCustomer'
import ReadNews from './ReadNews/ReadNews'
const NewsRoom = () => {
  return (
    <div className='w-full h-auto bg-mainBackGroundColor'>
      <HeaderNewsRoom />
      <HelpCustomer />
      <ReadNews />
      <Blog />
    </div>
  )
}

export default NewsRoom
