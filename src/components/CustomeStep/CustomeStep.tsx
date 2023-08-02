import { FC, useEffect, useRef, useState } from 'react'
import { Steps } from 'antd'

import { ICustomeStep } from '../../items/CustomeStepItem/CustomeStepItem'

type Props = {
  items: ICustomeStep[]
  children?: React.ReactNode
  classname?: string
}

const CustomeStep: FC<Props> = ({ items, classname, children }) => {
  const stepRef = useRef<HTMLDivElement | null>(null)
  const [current, setCurrent] = useState<number>(-1)

  useEffect(() => {
    const handleScroll = () => {
      if (stepRef.current) {
        let y: number = Math.floor((stepRef.current.getBoundingClientRect().y / window.innerHeight) * 100)
        if (y <= 60) {
          setCurrent(0)
        } else {
          setCurrent(-1)
        }
        if (y <= 30) {
          setCurrent((x) => (x % 3) + 1)
        }

        if (y <= 5) {
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
        items={items}
      />
    </div>
  )
}

export default CustomeStep
