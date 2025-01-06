import React from 'react'
import {ReactComponent as EditIcon} from '../../../../assets/icons-svg/square-pencil.svg' 
import {ReactComponent as FilterIcon} from '../../../../assets/icons-svg/filter-circle-outline.svg' 
import SearchBox from './SearchBox'

const ChatHeadListHeader = () => {
  return (
    <div className='header-main chat-head-list ' >
      <div>Chat</div>
      <div className='icons' >
        <div><EditIcon className='fill' /></div>
        <div><FilterIcon className='stroke' /></div>
      </div>
    </div>
  )
}

export default ChatHeadListHeader;