import { createContext, useState } from 'react'

interface AppContextInterface {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,

}

export const getInitialAppContext: () => AppContextInterface = () => ({
  openModal:false,
  setOpenModal: () => {},
})

const initialAppContext = getInitialAppContext()

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({
  children,
}: {
  children: React.ReactNode
  defaultValue?: AppContextInterface
}) => {
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <AppContext.Provider
      value={{
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
