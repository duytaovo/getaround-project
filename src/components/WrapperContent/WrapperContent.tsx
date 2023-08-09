import { FC } from 'react'
import { Text } from '../Edition/Text'

type WrapperProps = {
  title: string
  classname?: string
  children?: React.ReactNode
  textAlign?: 'left' | 'right' | 'center'
  titlePadding?: number
  isBgTransparent?: boolean
  fontSize?: number
  isUpperCase?:boolean
}

const WrapperContent: FC<WrapperProps> = ({
  title,
  classname,
  children,
  textAlign,
  titlePadding,
  isBgTransparent,
  fontSize,
  isUpperCase
}) => {
  return (
    <div
      className={`max-w-[1272px] h-fit ${
        isBgTransparent ? 'bg-transparent' : 'bg-white/90'
      } mb-bottom my-8 rounded-[22px] m-auto xl:mx-[8px]`}
    >
      <Text
        id='id-text'
        tag='p'
        content={title}
        className={`text-${textAlign} text-mainColor text-[11px] ${isUpperCase ? 'uppercase' : ""} text-[${fontSize + 'px'}] font-bold pt-2`}
        style={{
          padding: `0 ${titlePadding}px`,
          // textTransform:`${isUpperCase ? 'uppercase' : "lowercase"}`
        }}
      />
      {/* <p
        className={`text-${textAlign} text-mainColor uppercase text-[11px] text-[${fontSize + 'px'}] font-bold pt-2`}
        style={{
          padding: `0 ${titlePadding}px`
        }}
      >
        {title}
      </p> */}
      <div className={classname}>{children}</div>
    </div>
  )
}

export default WrapperContent
