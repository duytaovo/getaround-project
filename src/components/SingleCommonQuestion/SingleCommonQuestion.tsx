import { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  contents: string[]
  path?: string
}

const SingleCommonQuestion: FC<Props> = ({ contents, path }) => {
  return (
    <div className='text-ellipsis text-white/50 '>
      {contents.map((sentence) => (
        <p>{sentence}</p>
      ))}
      <Link to={path || '/'} className='text-mainColor'>
        Read more
      </Link>
    </div>
  )
}

export default SingleCommonQuestion
