import { Button, Modal, Result, Spin } from 'antd'
import * as React from 'react'
import imgCar from './standard.png'
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export default function BookACarMobilePage9() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Modal open={true} centered destroyOnClose={true} footer closeIcon={false} className=''>
        <div className='text-center'>
          <Result status='success' title='Đã tìm được xe !' extra={[<Button key='buy'>Đi tới nơi đặt xe</Button>]} />
        </div>
      </Modal>
    </div>
  )
}
