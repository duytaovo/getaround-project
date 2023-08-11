import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Text } from '../Edition/Text'
import { iDGenerator } from 'src/utils/idGenerator'

type Props = {
  contents: string[]
  path?: string
  paddingRight?: number
}

const SingleCommonQuestion: FC<Props> = ({ contents, path, paddingRight }) => {
  return (
    <div
      style={{
        paddingRight: `${paddingRight}%`
      }}
      className='text-justify text-white/50'
    >
      {contents.map((sentence, index) => (
        <Text key={index} content={sentence} id={iDGenerator('txt')} tag='p' />
      ))}
      <Link to={path || '/'} className='text-mainColor'>
        Read more
      </Link>
    </div>
  )
}

export default SingleCommonQuestion
