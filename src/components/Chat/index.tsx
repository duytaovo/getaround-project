import React from 'react'
import type { MenuProps } from 'antd'
import { Button, Dropdown, Popover } from 'antd'
import ChatIcon from '@mui/icons-material/Chat'
import { IconButton } from '@mui/material'
import ChatComponent from './components/ChatModal'
// const items: MenuProps['items'] = [
//   {
//     key: '1',
//     label: (

//     )
//   }
// ]
const text = <span className=''>Chat with Unlock Car</span>

const content = (
  <div>
    <ChatComponent />
  </div>
)
const Chat: React.FC = () => (
  <>
    <div className='transition-all text-2xl shadow-lg text-mainL1 flex justify-center items-center  fixed bottom-20 right-5 z-[999999999999999] bg-mainColor h-12 w-12 rounded-full cursor-pointer hover:scale-110 active:scale-100'>
      <Popover placement='topRight' title={text} content={content} trigger='click'>
        <IconButton>
          <ChatIcon />
        </IconButton>
      </Popover>
    </div>
  </>
)

export default Chat
