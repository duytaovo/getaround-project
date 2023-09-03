import path from 'src/constants/path'
import { lazy, Suspense, useContext, useEffect, useMemo, useState } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { routeAuth, routeMain, routeManageCar, routeUser } from './routes'
import { useAppDispatch, useAppSelector } from './hooks/useRedux'
import { _getData } from './store/dataSlice'
import UserLayout from './layouts/UserLayout/MainLayout'
import ManageCarUserLayout from './layouts/ManageCarUser/ManageCarUserLayout'
import { AppContext } from './contexts/app.context'
import UnAuthenticatedGuard from './guards/UnAuthenticatedGuard'
import AuthenticatedGuard from './guards/AuthenticatedGuard'

export default function useRouteElements() {
  const data = useAppSelector((state) => state?.data?.data)
  const dataLength = Object?.values(data)?.length
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const dispatch = useAppDispatch()
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

  const renderRouterAuth = useMemo(() => {
    return routeAuth.map(({ path, Component }, index) => {
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
      <Route
        path=''
        element={
          <AuthenticatedGuard>
            <MainLayout />
          </AuthenticatedGuard>
        }
      >
        {renderRouterAuth}
      </Route>
      <Route
        path=''
        element={
          <UnAuthenticatedGuard>
            <ManageCarUserLayout />
          </UnAuthenticatedGuard>
        }
      >
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
