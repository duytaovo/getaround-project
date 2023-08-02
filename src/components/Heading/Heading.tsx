import { FC, useEffect, useState } from 'react'

type HeadingPropsType = {
  title: string
  className?: string
  breakLineAt?: number
  fontSize: number
}

const Heading: FC<HeadingPropsType> = ({ title, className, breakLineAt, fontSize }) => {
  const [sentences, setSentences] = useState<string[]>([])
  useEffect(() => {
    const words = title.split(' ')
    const firstSentence = words.slice(0, breakLineAt).join(' ')
    const secondSentence = words.slice(breakLineAt, words.length).join(' ')
    setSentences([firstSentence, secondSentence])
  }, [title])

  return (
    <div className={className}>
      <h1 className={`w-full mx-auto h-full text-black text-[${JSON.stringify(fontSize)}px] font-bold py-4`}>
        {sentences.map((sentence) => {
          return (
            <p
              className='mb-1'
              style={{
                lineHeight: '100%'
              }}
            >
              {sentence}
            </p>
          )
        })}
      </h1>
    </div>
  )
}

export default Heading
