import path from 'src/constants/path'
import { lazy, Suspense, useMemo } from 'react'
import {  Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { routeMain } from './routes'



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
