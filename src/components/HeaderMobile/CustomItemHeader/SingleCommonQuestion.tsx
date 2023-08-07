import { FC, ReactNode, memo } from 'react'
import { Link } from 'react-router-dom'
import AccountCircleIcon  from '@mui/icons-material/AccountCircle';

type Props = {
  contents: Object[] 
  path?: string
}

const SingleCommonQuestion: FC<Props> = ({ contents, path }) => {
  return (
    <div className='text-ellipsis text-white/50 bg-white space-y-2 rounded-md'>
      {contents?.map((sentence:any,index) => (
        <div key={index}>
          {sentence?.link}
        </div>
      ))}
     
    </div>
  )
}

export default memo(SingleCommonQuestion)
