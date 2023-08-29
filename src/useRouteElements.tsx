import path from 'src/constants/path'
import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { routeMain, routeManageCar, routeUser } from './routes'
import { useAppDispatch, useAppSelector } from './hooks/useRedux'
import { _getData } from './store/dataSlice'
import { Loader } from './components/Loader'
import UserLayout from './layouts/UserLayout/MainLayout'
// import ManageCarLayout from './layouts/ManageCar'
import ManageCarUserLayout from './layouts/ManageCarUser/ManageCarUserLayout'

export default function useRouteElements() {
  const data = useAppSelector((state) => state?.data?.data)
  const dataLength = Object?.values(data)?.length
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const dispatch = useAppDispatch()

  const { pathname } = useLocation()

  // useEffect(() => {
  //   setIsLoading(true)
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 2000)
  // }, [pathname])

  useEffect(() => {
    dispatch(_getData(''))
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [dataLength])

  const renderRouter = useMemo(() => {
    return routeMain.map(({ path, Component }, index) => {
      return (
        <Route
          key={index}
          path={path}
          element={
            <Suspense>
              <Component defaultValue='' id='' label=' ' placeholder='' register='' setValue='' textAlign='' />
            </Suspense>
          }
        />
      )
    })
  }, [path])
  const renderRouterBookACar = useMemo(() => {
    return routeUser.map(({ path, Component }, index) => {
      return (
        <Route
          key={index}
          path={path}
          element={
            <Suspense>
              <Component />
            </Suspense>
          }
        />
      )
    })
  }, [path])

  const renderRouterManageCar = useMemo(() => {
    return routeManageCar.map(({ path, Component }, index) => {
      return (
        <Route
          key={index}
          path={path}
          element={
            <Suspense>
              <Component />
            </Suspense>
          }
        />
      )
    })
  }, [path])

  const routeElements = (
    <Routes>
      <Route path='' element={<MainLayout />}>
        {renderRouter}
      </Route>
      <Route path='' element={<UserLayout />}>
        {renderRouterBookACar}
      </Route>
      <Route path='' element={<ManageCarUserLayout />}>
        {renderRouterManageCar}
      </Route>
    </Routes>
  )

  return (
    <>
      {/* {routeElements} */}
      {dataLength ? routeElements : <div></div>}
      <div
        className={`duration-700 transition-all fixed w-full bottom-0 overflow-hidden z-[9999999] bg-mainL1 flex justify-center items-center ${
          !isLoading ? 'h-0 rounded-tl-[100%] rounded-tr-[100%]' : 'h-full'
        }`}
      >
        <div className='flex flex-col items-center '>
          <div className='px-2 py-1 bg-white w-[150px]'>
            <img src='/logo.jpg' alt='logo' className='fill-current bg-none h-[36px] w-full ' />
          </div>
          <div className='py-2'>Loading...</div>
        </div>
      </div>
    </>
  )
}
