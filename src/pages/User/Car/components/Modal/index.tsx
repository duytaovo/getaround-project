import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useSpring, animated } from '@react-spring/web'
import Input from 'src/components/Input'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import SelectMUI, { SelectChangeEvent } from '@mui/material/Select'
import type { CustomTagProps } from 'rc-select/lib/BaseSelect'
import { Select, Tag } from 'antd'
interface FadeProps {
  children: React.ReactElement
  in?: boolean
  onClick?: any
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void
  onExited?: (node: HTMLElement, isAppearing: boolean) => void
  ownerState?: any
}

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

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  //   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
}

const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }]

const tagRender = (props: CustomTagProps) => {
  const { label, value, closable, onClose } = props
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault()
    event.stopPropagation()
  }
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  )
}
type Props = {
  open: boolean
  onChange: () => void
}
export default function CustomModal({ open, onChange }: Props) {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }
  const [selectedItems, setSelectedItems] = React.useState<string[]>([])
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
            <span className='text-xl p-4 mb-4'>Thêm xe </span>
            <div className='flex items-center w-full space-x-2'>
              <div className='w-1/2'>
                <Input
                  classNameInput='p-3 w-full text-black outline-none border border-gray-300 focus:border-gray-500 rounded-md focus:shadow-sm'
                  name='license_plate'
                  //   register={register}
                  type='text'
                  className=''
                  //   errorMessage={errors.email?.message}
                  placeholder='Biển số xe'
                />
              </div>
              <div className='w-1/2'>
                <Input
                  classNameInput='p-3 w-full text-black outline-none border border-gray-300 focus:border-gray-500 rounded-md focus:shadow-sm'
                  name='phoneOwner'
                  //   register={register}
                  type='text'
                  className=''
                  //   errorMessage={errors.email?.message}
                  placeholder='Số điện thoại '
                />
              </div>
            </div>
            <Input
              classNameInput='p-3 w-full text-black outline-none border border-gray-300 focus:border-gray-500 rounded-md focus:shadow-sm'
              name='vinNumber'
              //   register={register}
              type='text'
              className=''
              //   errorMessage={errors.email?.message}
              placeholder='Số VIN '
            />
            {/* <FormControl sx={{ m: 1 }} size='small'> */}
            {/* <InputLabel id='demo-select-small-label' className='mb-5'>
                Phương thức đăng ký
              </InputLabel> */}
            <div className='rounded-2xl m-2'>
              <Select
                placeholder='Phương thức Đk'
                value={selectedItems}
                onChange={setSelectedItems}
                mode='multiple'
                tagRender={tagRender}
                defaultValue={['gold', 'cyan']}
                style={{ width: '100%', margin: 1, borderRadius: '20px' }}
                options={options}
                className='rounded-2xl'
              />
            </div>
            {/* </FormControl> */}
            <FormControl sx={{ m: 1, minWidth: 200 }} size='small'>
              <InputLabel id='demo-select-small-label'>Hãng xe</InputLabel>
              <SelectMUI
                labelId='demo-select-small-label'
                id='demo-select-small'
                value={age}
                label='Age'
                onChange={handleChange}
              ></SelectMUI>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 200 }} size='small'>
              <InputLabel id='demo-select-small-label'>Kiểu xe</InputLabel>
              <SelectMUI
                labelId='demo-select-small-label'
                id='demo-select-small'
                value={age}
                label='Age'
                onChange={handleChange}
              ></SelectMUI>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 420 }} size='small'>
              <InputLabel id='demo-select-small-label'>Chuỗi xe</InputLabel>
              <SelectMUI
                labelId='demo-select-small-label'
                id='demo-select-small'
                value={age}
                label='Age'
                onChange={handleChange}
              ></SelectMUI>
            </FormControl>
            <div className='w-full flex'>
              <div className='w-1/2'>
                <FormControl sx={{ m: 1, minWidth: 200 }} size='small'>
                  <InputLabel id='demo-select-small-label'>Loại phương tiện</InputLabel>
                  <SelectMUI
                    labelId='demo-select-small-label'
                    id='demo-select-small'
                    value={age}
                    label='Age'
                    onChange={handleChange}
                  ></SelectMUI>
                </FormControl>
              </div>
              <div className='w-1/2'>
                <FormControl sx={{ m: 1, minWidth: 200 }} size='small'>
                  <InputLabel id='demo-select-small-label'>Loại biển xe</InputLabel>
                  <SelectMUI
                    labelId='demo-select-small-label'
                    id='demo-select-small'
                    value={age}
                    label='Age'
                    onChange={handleChange}
                  ></SelectMUI>
                </FormControl>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
