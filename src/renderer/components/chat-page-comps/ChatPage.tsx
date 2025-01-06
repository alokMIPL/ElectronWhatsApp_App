import React from 'react'
import ChatPageHeader from './ChatPageHeader'
import ChatBox from './ChatBox'
import ChatPageCenter from './ChatPageCenter'

const ChatOutput = () => {
  return (
    <div className='chat-page' >
      <ChatPageHeader/>
      <ChatPageCenter/>
      <ChatBox/>
    </div>
  )
}

export default ChatOutput;