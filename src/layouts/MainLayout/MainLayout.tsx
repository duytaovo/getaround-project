import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'src/components/Header'

type Props = {}

const MainLayoutInner = (props: Props) => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
const MainLayout = memo(MainLayoutInner)

export default MainLayout
