import React from 'react'
import { Link } from 'react-router-dom'
import { IChatBubble, IChatHead, IListItem } from './types'
import { ReactComponent as SendCheckmarks } from '../../../assets/icons-svg/checkmark-double.svg'
import { ReactComponent as AngleRightIcon } from '../../../assets/icons-svg/angle-right (1).svg'
import { useParams } from 'react-router-dom';

export const SidebarIcon = React.memo((props: any) => {
  return (
    <div className='sidebar-icon' >
      {props.children}
    </div>
  )
})

export const ChatHead = React.memo(({data}: {data: IChatHead}) => {
  const {conversationId} = useParams();
  React.useEffect(() => {
    console.log( "conversationId is", conversationId)
  },[conversationId])
  return (
    <Link to={"/chat/"+data.id} className={conversationId as unknown as number == data.id ? 'chat-head-container active' : 'chat-head-container'} >
      <div className='chat-head-inner'>
        <div>
          <img src={data.profileImage} alt="" />
        </div>
        <div className='chat-head-details' >
          <div>
            <div className='user-name' >{data.name}</div>
            <div>yesterday</div>
          </div>
          <div className='last-message' >
            {data.lastMessage}
          </div>
        </div>
      </div>
    </Link>
  )
})

export const ChatBubble = React.memo(({chat, sent}: {chat: IChatBubble; sent: boolean}) => {
  return (
    // sent | incoming
    <div className={sent ? 'chat-bubble-container sent' : 'chat-bubble-container incoming'}>
      <div className='chat-bubble-inner '>
        <div>{chat.message}</div>
        <div>
          <span>05:08</span>
          <SendCheckmarks/>
        </div>
      </div>
    </div>
  )
})


export const ListItem = React.memo(({icon, title, isRoute, info, style}: IListItem) => {
  return (
    <div className='last-item' style={style} >
      <div>
        {
          icon &&
          <div>
            {icon}
          </div>
        }
        <div>
          <div>{title}</div>
          <div className='info' >
            {info}
          </div>
        </div>
      </div>
      {
        isRoute &&
        <div>
          <AngleRightIcon className='no-fill' />        
        </div>
      }
    </div>
  )
})

export const ListGroup = React.memo((props: any) => {
  return (
    <div className='list-item' >
      {props.children}
    </div>
  )
})