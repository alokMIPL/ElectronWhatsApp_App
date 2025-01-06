import React from 'react'
import {ReactComponent as PlusIcon} from '../../../../assets/icons-svg/plus.svg' 
import {ReactComponent as FileIcon} from '../../../../assets/icons-svg/sticker.svg' 
import {ReactComponent as SmileyFaceIcon} from '../../../../assets/icons-svg/grinning-face.svg'  
import {ReactComponent as MicIcon} from '../../../../assets/icons-svg/mic.svg' 
import { useAppDispatch, useAppSelector } from '../../shared/hooks'
import { updateChatBubble } from '../../shared/rdx-slice'
import { IChatBubble } from '../../shared/types'
import { useParams } from 'react-router-dom';


const ChatBox = () => {
  const dispatch = useAppDispatch();
  const chats = useAppSelector((state) => state.main.chats);
  const user_details = useAppSelector((state) => state.main.user_details);
  const {conversationId} = useParams()


  const handleSendMessage = React.useCallback((e: any) => {
    e.preventDefault()
    if (e.key.toLowerCase() === 'enter') {
      const chatBubble: IChatBubble = {
        message: e.target.innerText,
        time: "05:55",
        user_id: user_details.id.toString(),
        id: chats.filter(chat => chat.conversation_id == conversationId as unknown as number ).length + 1,
        conversation_id: conversationId as unknown as number,
      }
      dispatch(updateChatBubble(chatBubble))
    }
    console.log(e)
  }, [])

  // indexedDB
  // webSockets
  // a temporary remote server database

  return (
    <div className='chat-box-container' >
      <div>
        <PlusIcon className='bigger' />
      </div>
      <div className='input-container' >
        <div className="input" defaultValue={"Hello there"}  contentEditable="true" onKeyUp={handleSendMessage} />
        <div>
          <FileIcon/>
          <SmileyFaceIcon/>
        </div>
      </div>
      <div>
        <MicIcon/>
      </div>
    </div>
  )
}

export default ChatBox;