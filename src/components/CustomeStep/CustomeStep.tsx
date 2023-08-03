import { FC, useEffect, useRef, useState } from 'react'
import { Steps } from 'antd'

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
}

const CustomeStep: FC<Props> = ({ items, classname, icons }) => {
  const stepRef = useRef<HTMLDivElement | null>(null)
  const [current, setCurrent] = useState<number>(-1)

  const itemsForSteps = items.map((item, index) => ({
    icon: icons[index],
    title: item.title,
    subTitle: <h1>{item.subTitle}</h1>,
    description: <div className='flex'>{item.images?.map((image) => <img className='pr-2' src={image} />)}</div>
  }))

  useEffect(() => {
    const handleScroll = () => {
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
