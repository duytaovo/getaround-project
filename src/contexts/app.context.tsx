import { createContext, useState } from 'react'
import { getAccessTokenFromLS } from 'src/utils/auth'

interface AppContextInterface {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

export const getInitialAppContext: () => AppContextInterface = () => ({
  openModal: false,
  setOpenModal: () => {},
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => null
})

const initialAppContext = getInitialAppContext()

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({
  children,
  defaultValue = initialAppContext
}: {
  children: React.ReactNode
  defaultValue?: AppContextInterface
}) => {
  const [openModal, setOpenModal] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(defaultValue.isAuthenticated)

  return (
    <AppContext.Provider
      value={{
        openModal,
        setOpenModal,
        isAuthenticated,
        setIsAuthenticated
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
