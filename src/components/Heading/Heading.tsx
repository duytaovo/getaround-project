import { FC, useEffect, useState } from 'react'
import { Text } from 'src/components/Edition/Text'
import { useAppSelector } from 'src/hooks/useRedux'
import { text } from 'stream/consumers'

type HeadingPropsType = {
  title: string
  className?: string
  breakLineAt?: number
  color?: string
  fillColorAt?: number[]
  fontSize: number
}

const Heading: FC<HeadingPropsType> = ({ title, className, breakLineAt, fontSize, color, fillColorAt }) => {
  const [sentences, setSentences] = useState<string[]>([])
  useEffect(() => {
    const words = title.split(' ')
    const firstSentence = words.slice(0, breakLineAt).join(' ')
    const secondSentence = words.slice(breakLineAt, words.length).join(' ')
    setSentences([firstSentence, secondSentence])
  }, [title, breakLineAt])
  const data = useAppSelector((state) => state.data.data)

  return (
    <div className={className}>
      <h1
        style={{
          fontSize: `${fontSize}px`,
          color
        }}
        className={`w-full mx-auto h-full text-black/90 font-bold py-4`}
      >
        {sentences.map((sentence, index) => {
          return <Text key={index} id={sentence} content={data[sentence]} tag='p' className={`mb-1 leading-[100%]`} />
        })}
      </h1>
    </div>
  )
}

export default Heading
