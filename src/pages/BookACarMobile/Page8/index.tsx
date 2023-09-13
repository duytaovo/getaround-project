import { Modal, Spin } from 'antd'
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

export default function BookACarMobilePage8() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Modal open={true} centered destroyOnClose={true} footer closeIcon={false}>
        <div className='p-8  text-center'>
          <Spin tip='Đang tìm kiếm...' size='large'>
            <div className='content' />
          </Spin>
          <div className='flex justify-center items-center mt-8 h-[100px]'>
            <img src={imgCar} alt='img' className='' />
          </div>
        </div>
      </Modal>
    </div>
  )
}
