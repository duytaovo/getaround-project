//@ts-nocheck
import { BsChevronLeft } from 'react-icons/bs'
import { CustomArrowProps } from 'react-slick'

interface PrevArrowProps {
  props?: CustomArrowProps
  breakpoints?: Array<Object>
  customClassName?: string
}
const PrevArrow: React.FC<PrevArrowProps> = (props) => {
  const { style, onClick, currentSlide, breakpoints, customClassName } = props

  const disabled = currentSlide === 0 ? 'bg-rose-500' : ''

  return (
    <div className={'absolute left-0 top-0 h-full w-20 z-10'} style={{ ...style }}>
      <div className='h-full w-full flex items-center bg-transparent'>
        {!disabled ? (
          <div
            onClick={onClick}
            className={`-translate-x-full w-9 h-9 cursor-pointer rounded-full bg-white opacity-60  flex items-center justify-center cursor-pointer'
                      ${customClassName}`}
          >
            <BsChevronLeft size={18} className='text-black rounded-full' />
          </div>
        ) : (
          <div
            onClick={onClick}
            className={`-translate-x-full w-9 h-9 cursor-pointer rounded-full  flex items-center justify-center cursor-not-allowed'
                   ${customClassName}`}
          >
            <BsChevronLeft size={18} className='text-black rounded-full' />
          </div>
        )}
      </div>
    </div>
  )
}

export default PrevArrow
