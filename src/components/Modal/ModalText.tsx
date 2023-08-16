import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { IconButton } from '@mui/material'
import { CloseCircleOutlined } from '@ant-design/icons'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'black',
  borderRadius: '20px'
}

interface ModalTextProps {
  children: React.ReactNode
  setEnable?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TransitionsModalText({ children, setEnable }: ModalTextProps) {
  const [open, setOpen] = React.useState(true)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleGetValue = () => {
    // handleClose()
  }
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* <IconButton
              aria-label='close'
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500]
              }}
            >
              <CloseCircleOutlined />
            </IconButton> */}
            <Typography
              id='transition-modal-title'
              variant='h6'
              component='h2'
              color={'black'}
              sx={{
                marginBottom: 2
              }}
              className=''
            >
              Chỉnh sửa ở đây
            </Typography>
            {/* <Typography id='transition-modal-description' sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
            {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
