import { Grid } from '@mui/material'
import React, { ReactNode, useEffect } from 'react'
import {
  getCarsBrand,
  getCarsLicense,
  getCarsRegis,
  getCarsSeri,
  getCarsType
} from 'src/store/car/manageCar/managCarSlice'
import { useAppDispatch } from 'src/hooks/useRedux'
import SideBar from './SideBar'
import Header from './Main/Header'
import Main from './Main/Main'
type Props = {}

const ManageCar = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = (value: boolean) => {
    setOpen(value)
  }
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getCarsBrand(''))
    dispatch(getCarsLicense(''))
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
          {/* <CustomModal open={open} onChange={handleClose} /> */}
        </Grid>
        <Grid item xs={9.5}>
          <Header onClick={handleOpen} />
          <Main onClick={handleOpen} />
        </Grid>
      </Grid>
    </div>
  )
}

export default ManageCar
