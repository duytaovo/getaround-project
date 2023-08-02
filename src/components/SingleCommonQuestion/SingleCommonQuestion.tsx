import { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  content: string
  path?: string
}

const SingleCommonQuestion: FC<Props> = ({ content, path }) => {
  return (
    <div className='text-justify'>
      <p>{content}</p>
      <Link to={path || '/'}>Read more</Link>
    </div>
  )
}

export default SingleCommonQuestion
