import path from 'src/constants/path'
import { lazy, Suspense, useContext, useMemo, useRef } from 'react'
import { Navigate, Outlet, Route, RouteObject, Routes, useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))
const HowItWork = lazy(() => import('./pages/howitwork'))
const routeMain = [
  {
    path: path.home,
    Component: Home
  },
  {
    path: '*',
    Component: NotFound
  },
  {
    path: path.howitwork,
    Component: HowItWork
  }
]

export default function useRouteElements() {
  const renderRouter = useMemo(() => {
    return routeMain.map(({ path, Component }, index) => {
      let Page = Component
      return (
        <Route
          key={index}
          path={path}
          element={
            <Suspense>
              <Page />
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
    </Routes>
  )
  return routeElements
}
