import { Hidden } from '@mui/material'
import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import HeaderMobile from 'src/components/HeaderMobile/HeaderMobile'
import ConsentManager from 'src/components/Memo/ConsentManager'
import HypeMemo from 'src/components/Memo/HypeMemo'
type Props = {}

const MainLayoutInner = (props: Props) => {
  return (
    <div>
      <div>
        <Hidden mdDown>
          <Header />
        </Hidden>
        <Hidden mdUp>
          <HeaderMobile />
        </Hidden>
      </div>
      <div className='pt-[110px] container px-[96px] xl:px-[20px]'>
        <Outlet />
      </div>
      <Footer />
      <div className='fixed left-0 right-0 bottom-0 z-[20000]'>
        <HypeMemo />
        <ConsentManager />
      </div>
    </div>
  )
}
const MainLayout = memo(MainLayoutInner)

export default MainLayout
