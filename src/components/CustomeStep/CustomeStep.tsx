import { FC, useEffect, useRef, useState } from 'react'
import { Steps } from 'antd'
import { Text } from '../Edition/Text'

interface ICustomeStep {
  title: string
  images?: string[]
  subTitle: string
}

type Props = {
  items: ICustomeStep[]
  icons: React.ReactNode[]
  children?: React.ReactNode
  classname?: string
  titleClassName?: string
  textClassName?: string
}

const CustomeStep: FC<Props> = ({ items, classname, icons, textClassName, titleClassName }) => {
  const stepRef = useRef<HTMLDivElement | null>(null)
  const [current, setCurrent] = useState<number>(-1)

  const itemsForSteps = items.map((item, index) => ({
    icon: icons[index],
    title: <Text id='id-text' tag='p' content={item.title} className={titleClassName} />,
    subTitle: (
      <Text id='id-text' tag='h1' content={item.subTitle} className={textClassName} />
      // <h1 key={index} className={textClassName}>
      //   {item.subTitle}
      // </h1>
    ),
    description: (
      <div className='flex'>
        {item.images?.map((image, index) => <img key={index} className='pr-2 w-20' src={image} />)}
      </div>
    )
  }))

  useEffect(() => {
    const handleScroll = () => {
      // console.log('scroll')
      if (stepRef.current) {
        let y: number = Math.floor((stepRef.current.getBoundingClientRect().y / window.innerHeight) * 100)
        if (y <= 60) {
          setCurrent(0)
        } else {
          setCurrent(-1)
        }
        if (y <= 35) {
          setCurrent((x) => (x % 3) + 1)
        }

        if (y <= 10) {
          setCurrent((x) => (x % 3) + 1)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div
      className={classname}
      ref={stepRef}
      style={{
        display: 'flex'
      }}
    >
      <Steps
        current={current}
        direction='vertical'
        style={{
          width: '100%',
          height: '100%'
        }}
        items={itemsForSteps}
      />
    </div>
  )
}

export default CustomeStep
