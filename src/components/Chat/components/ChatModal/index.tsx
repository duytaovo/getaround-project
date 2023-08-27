import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import SendIcon from '@mui/icons-material/Send'
import { IconButton } from '@mui/material'
const ChatComponent = () => {
  const [messages, setMessages] = useState<string[]>([])
  const [messagesRes, setMessagesRes] = useState<string[]>([])
  const [message, setMessage] = useState('')
  const socket = io('http://localhost:3141')

  useEffect(() => {
    // socket.on('add-new-contact', (msg: string) => {
    //   setMessages((prevMessages) => [...prevMessages, msg])
    // })
    // socket.on('response-add-new-contact', (data: any) => {
    //   console.log(data)
    // })
    // return () => {
    //   socket.disconnect()
    // }
    const socketOn = async () => {
      await socket.on('chat message', (data) => {
        setMessages([...messages, data])
      })
      setTimeout(() => {
        socket.on('res_1', (data) => {
          setMessagesRes([...messagesRes, data])
        })
      }, 600)
      setTimeout(() => {
        socket.on('res_2', (data) => {
          setMessagesRes([...messagesRes, data])
        })
      }, 600)
      setTimeout(() => {
        socket.on('res_3', (data) => {
          setMessagesRes([...messagesRes, data])
        })
      }, 600)
      setTimeout(() => {
        socket.on('res_4', (data) => {
          setMessagesRes([...messagesRes, data])
        })
      }, 600)
    }
    socketOn()
  }, [messages])
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (message.trim() !== '') {
      socket.emit('chat message', message)
      setMessage('')
    }
    // socket.emit('add-new-contact', { contactId: '1' })
  }

  return (
    <div className='chat-container pt-4'>
      {/* Render the chat messages */}
      <div className='chat-messages'>
        {messages.map((msg, index) => (
          <div key={index} className='message'>
            {msg}
          </div>
        ))}
        {messagesRes.map((msg, index) => (
          <div key={index} className='message'>
            {msg}
          </div>
        ))}
      </div>
      {/* Input field and send button */}
      <div className='input-container'>
        <form onSubmit={handleSubmit} className='MessageForm'>
          <input
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Enter your message'
            className='outline-none'
          />
          <IconButton type='submit'>
            <SendIcon />
          </IconButton>
          {/* <button>Send</button> */}
        </form>
      </div>
    </div>
  )
}

export default ChatComponent
