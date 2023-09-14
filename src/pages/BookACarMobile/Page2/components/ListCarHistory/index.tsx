import * as React from 'react'
import { Global } from '@emotion/react'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import CustomMapHistory from '../map'
import Button from 'src/components/Button'
import Address from '../Address'
import ItemListInfoCar from 'src/pages/BookACarMobile/Page1/components/ItemListInfoCar'
import HistoryIcon from '@mui/icons-material/History'
import Typography from '@mui/material/Typography'
const drawerBleeding = 18

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
}

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default
}))

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800]
}))

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)'
}))
export default function SwipeableEdgeDrawer(props: Props) {
  const { window } = props
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const [selectPosition, setSelectPosition] = React.useState(null)
  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(45% - ${drawerBleeding}px)`,
            overflow: 'visible'
          }
        }}
      />
      {/* map */}
      <Box sx={{ textAlign: 'center', pt: 1 }}>
        <CustomMapHistory selectPosition={selectPosition} />
      </Box>
      <SwipeableDrawer
        container={container}
        anchor='bottom'
        open={true}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 21,
            borderTopRightRadius: 21,
            visibility: 'visible',
            right: 0,
            left: 0
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary', borderRadius: 26 }}></Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto'
          }}
        >
          <div className='mt-6 mb-2'>
            <Address selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
          </div>
          <div className='text-black/70 mt-5 flex flex-row justify-start items-start space-x-1'>
            <HistoryIcon className='text-mainColor'></HistoryIcon>
            <span> Tìm kiếm gần dây</span>
          </div>
          <div className='mt-2'>
            <ItemListInfoCar />
          </div>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  )
}
