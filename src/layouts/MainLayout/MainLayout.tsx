import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import ConsentManager from 'src/components/Memo/ConsentManager'
import HypeMemo from 'src/components/Memo/HypeMemo'
type Props = {}

const MainLayoutInner = (props: Props) => {
  return (
    <div>
      <Header />
      <div className='pt-[110px] container px-[96px] xl:px-[0px]'>
        <Outlet />
      </div>
      <Footer />
      <HypeMemo />
      <ConsentManager />
    </div>
  )
}
const MainLayout = memo(MainLayoutInner)

export default MainLayout
