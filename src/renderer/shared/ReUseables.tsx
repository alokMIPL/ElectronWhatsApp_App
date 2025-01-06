import React from 'react'
import { Link } from 'react-router-dom'
import { IChatHead } from './types'

export const SidebarIcon = React.memo((props: any) => {
  return (
    <div className='sidebar-icon' >
      {props.children}
    </div>
  )
})

export const ChatHead = React.memo(({data}: {data: IChatHead}) => {
  return (
    <Link to={"/chat/"+data.id} className='chat-head-container' >
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