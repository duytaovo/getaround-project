import React, { useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useSpring, animated } from '@react-spring/web'
import { message, Steps, theme } from 'antd'
import { CircularProgress, OutlinedInput } from '@mui/material'
import Button from 'src/components/Button'
import CustomModal from '../Modal'
interface FadeProps {
  children: React.ReactElement
  in?: boolean
  onClick?: any
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void
  onExited?: (node: HTMLElement, isAppearing: boolean) => void
  ownerState?: any
}
const steps = [
  {
    title: 'First',
    content: <CustomModal open onChange={() => {}} />
  },
  {
    title: 'Second',
    content: 'Second-content'
  },
  {
    title: 'Last',
    content: 'Last-content'
  }
]
const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { children, in: open, onClick, onEnter, onExited, ownerState, ...other } = props
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as any, true)
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as any, true)
      }
    }
  })

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  )
})
const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
]

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  height: '80%',
  overflowY: 'scroll',
  scroll: 'smooth',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
}
interface Props {
  open: boolean
  onChange: () => void
}
export default function CustomModalUpload({ open, onChange }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [disabled, setDisabled] = useState<boolean>(false)
  const onSubmit = () => {}
  const { token } = theme.useToken()
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const items = steps.map((item) => ({ key: item.title, title: item.title }))

  const contentStyle: React.CSSProperties = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16
  }
  return (
    <div>
      <Modal
        aria-labelledby='spring-modal-title'
        aria-describedby='spring-modal-description'
        open={open}
        onClose={onChange}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade
          }
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form className='profile-form__wrapper' autoComplete='off' onSubmit={onSubmit} noValidate>
              <span className='text-2xl p-4 pl-0  mb-8'>Thêm xe </span>

              <Steps current={current} items={items} />
              <div style={contentStyle}>{steps[current].content}</div>
              <div style={{ marginTop: 24 }}>
                {current < steps.length - 1 && (
                  <Button type='button' onClick={() => next()}>
                    Next
                  </Button>
                )}
                {current === steps.length - 1 && <Button type='button'>Done</Button>}
                {current > 0 && (
                  <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                    Previous
                  </Button>
                )}
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
