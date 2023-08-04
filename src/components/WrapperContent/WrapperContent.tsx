import { FC } from 'react'

type WrapperProps = {
  title: string
  classname?: string
  children?: React.ReactNode
  textAlign?: 'left' | 'right' | 'center'
  titlePadding?: number
  isBgTransparent?: boolean
}

const WrapperContent: FC<WrapperProps> = ({ title, classname, children, textAlign, titlePadding, isBgTransparent }) => {
  console.log(classname, children)
  return (
    <div
      className={`max-w-[1272px] h-fit ${
        isBgTransparent ? 'bg-transparent' : 'bg-white/90'
      } py-[20px] my-8 rounded-[22px] m-auto`}
    >
      <p className={`px-${titlePadding + ''} text-${textAlign} text-mainColor uppercase text-[11px] font-bold`}>
        {title}
      </p>
      <div className={classname}>{children}</div>
    </div>
  )
}

export default WrapperContent
