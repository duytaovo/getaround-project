import { Grid } from '@mui/material'
import React, { ReactNode } from 'react'
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash'
import SideBar from './components/SideBar'
import Header from './components/Main/Header'
import Main from './components/Main/Main'
type Props = {}

const Car = (props: Props) => {
  return (
    <div className='h-screen'>
      <Grid container spacing={2} gap={1}>
        <Grid item xs={2} className='border-r-[1px]'>
          <SideBar />
        </Grid>
        <Grid item xs={9.5}>
          <Header />
          <Main />
        </Grid>
      </Grid>
    </div>
  )
}

export default Car
