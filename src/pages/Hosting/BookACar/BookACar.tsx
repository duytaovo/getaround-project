import React from 'react'
import HomeHeroSection from 'src/pages/Home/home_hero_section/HomeHeroSection'
import FillterLocationTime from './components/FilterLocation'
import DropdownFirst from './components/Dropdownfirst'
import DropdownSecond from './components/DropdownSecond'
import DropdownThird from './components/DropdownThird'
import DropdownFour from './components/DropdownFour'

type Props = {}

const BookACar = (props: Props) => {
  return (
    <div className='h-screen text-white'>
      <div>
        <FillterLocationTime />
      </div>
      <div className='flex items-center justify-start gap-x-5'>
        <div>
          <DropdownFirst />
        </div>
        <div>
          <DropdownSecond />
        </div>
        <div>
          <DropdownThird />
        </div>
        <div>
          <DropdownFour />
        </div>
      </div>
    </div>
  )
}

export default BookACar
