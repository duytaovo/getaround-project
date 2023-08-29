import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Text } from '../Edition/Text'
import { useAppSelector } from 'src/hooks/useRedux'

type Props = {
  contents: string[]
  path?: string
  paddingRight?: number
}

const SingleCommonQuestion: FC<Props> = ({ contents, path, paddingRight }) => {
  const data = useAppSelector((state) => state.data.data)
  return (
    <div
      style={{
        paddingRight: `${paddingRight}%`
      }}
      className='text-justify '
    >
      {contents.map((sentence, index) => (
        <Text className='pb-2' key={index} content={data[sentence]} id={sentence} tag='p' />
      ))}
      <Link to={path || '/'} className='text-mainColor'>
        Xem thêm...
      </Link>
    </div>
  )
}

export default SingleCommonQuestion
