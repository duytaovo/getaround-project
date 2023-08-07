import { FC } from 'react'

type WrapperProps = {
  title: string
  classname?: string
  children?: React.ReactNode
  textAlign?: 'left' | 'right' | 'center'
  titlePadding?: number
  isBgTransparent?: boolean
  fontSize?: number
}

const WrapperContent: FC<WrapperProps> = ({
  title,
  classname,
  children,
  textAlign,
  titlePadding,
  isBgTransparent,
  fontSize
}) => {
  return (
    <div
      className={`max-w-[1272px] h-fit ${
        isBgTransparent ? 'bg-transparent' : 'bg-white/90'
      } mb-bottom my-8 rounded-[22px] m-auto xl:mx-[8px]`}
    >
      <p
        className={`text-${textAlign} text-mainColor uppercase text-[11px] text-[${fontSize + 'px'}] font-bold pt-2`}
        style={{
          padding: `0 ${titlePadding}px`
        }}
      >
        {title}
      </p>
      <div className={classname}>{children}</div>
    </div>
  )
}

export default WrapperContent
