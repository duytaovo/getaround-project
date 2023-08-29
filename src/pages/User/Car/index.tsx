import { Grid } from '@mui/material'
import React, { ReactNode, useEffect } from 'react'
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash'
import SideBar from './components/SideBar'
import Header from './components/Main/Header'
import Main from './components/Main/Main'
import CustomModal from './components/Modal'
import {
  getCarsBrand,
  getCarsLicense,
  getCarsModel,
  getCarsRegis,
  getCarsSeri,
  getCarsType
} from 'src/store/car/manageCar/managCarSlice'
import { useAppDispatch } from 'src/hooks/useRedux'
type Props = {}

const Car = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = (value: boolean) => {
    setOpen(value)
  }
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getCarsBrand(''))
    dispatch(getCarsLicense(''))
    dispatch(getCarsModel(''))
    dispatch(getCarsSeri(''))
    dispatch(getCarsType(''))
    dispatch(getCarsRegis(''))
  }, [])
  const handleClose = () => setOpen(false)
  return (
    <div className='h-screen'>
      <Grid container spacing={2} gap={1}>
        <Grid item xs={2} className='border-r-[1px]'>
          <SideBar />
          <CustomModal open={open} onChange={handleClose} />
        </Grid>
        <Grid item xs={9.5}>
          <Header onClick={handleOpen} />
          <Main />
        </Grid>
      </Grid>
    </div>
  )
}

export default Car
