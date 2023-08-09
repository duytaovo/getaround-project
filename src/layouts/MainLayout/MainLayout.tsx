import { Hidden } from '@mui/material'
import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from 'src/components/Footer'
import CustomeCollapseFooter from 'src/components/FooterMobile/CustomItemHeader'
import Header from 'src/components/Header'
import CustomeCollapseHeader from 'src/components/HeaderMobile/CustomItemHeader'
import HeaderMobile from 'src/components/HeaderMobile/HeaderMobile'
import ConsentManager from 'src/components/Memo/ConsentManager'
import HypeMemo from 'src/components/Memo/HypeMemo'
import { itemsHeaderMobile } from 'src/items/HeaderItem/HeaderItem'
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
      <div className='pt-[110px] container px-[96px] lg:px-2'>
        <Outlet />
      </div>
      <div className='bg-white'>
        <Hidden mdDown>
          <Footer />
        </Hidden>
        <Hidden mdUp>
          <CustomeCollapseFooter
            titleClassName='text-black/90 text-bold text-[18px] '
            items={itemsHeaderMobile}
            className='w-full'
          />
        </Hidden>
      </div>

      <div className='fixed left-0 right-0 bottom-0 z-[20000]'>
        <HypeMemo />
        <ConsentManager />
      </div>
    </div>
  )
}
const MainLayout = memo(MainLayoutInner)

export default MainLayout
