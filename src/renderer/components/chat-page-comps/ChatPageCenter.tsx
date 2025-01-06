import React from 'react'
import {ReactComponent as PadlockIcon} from '../../../../assets/icons-svg/padlock.svg'
import { ChatBubble } from '../../shared/ReUseables'
import { useAppSelector } from '../../shared/hooks'
import { useParams } from 'react-router-dom';

const ChatPageCenter = () => {

  const chatMessages = useAppSelector(state => state.main.chats)
  const {conversationId} = useParams()

  return (
    <div className='chat-page-center'>
      <div className="d-flex justify-content-center mt-3">
        <div className='chat-page-enc-text'>
          <PadlockIcon/>
          Messages and call are end-to-end encrypted. No 
          one outside of this chat, not even WhatsApp, can read 
          or listen to them.
          <span>Click to learn more</span>
        </div>
      </div>

      <div>
        {
          chatMessages.filter(chat => chat.conversation_id === conversationId as unknown as number).map(chat => 
            <ChatBubble chat= {chat}/>
          )
        }
        
      </div>

    </div>
  )
}

export default ChatPageCenter