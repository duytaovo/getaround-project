import useRouteElements from './useRouteElements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ErrorBoundary from './components/ErrorBoundary'
import { HelmetProvider } from 'react-helmet-async'
import { useContext, useEffect } from 'react'
import './App.css'

function App() {
  const routeElements = useRouteElements()

  return (
    <HelmetProvider>
      <ErrorBoundary>
        {routeElements}
        <ToastContainer />
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App
