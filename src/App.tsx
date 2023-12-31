import useRouteElements from './useRouteElements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ErrorBoundary from './components/ErrorBoundary'
import { HelmetProvider } from 'react-helmet-async'
import { useContext, useEffect } from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { SwitchMode } from './components/SwitchMode'
import TransitionsModalText from './components/Modal/ModalText'

// const theme = createTheme({
//   direction: 'rtl'
//   // other theme properties
// })

function App() {
  const routeElements = useRouteElements()

  return (
    // <ThemeProvider theme={theme}>
    <HelmetProvider>
      <ErrorBoundary>{routeElements}</ErrorBoundary>
      <ToastContainer />
      <SwitchMode />
    </HelmetProvider>
    // </ThemeProvider>
  )
}

export default App
