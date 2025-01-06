import React from 'react'
import {ReactComponent as VideoIcon} from '../../../../assets/icons-svg/video.svg' 
import {ReactComponent as CallIcon} from '../../../../assets/icons-svg/call-27.svg' 
import {ReactComponent as SearchIcon} from '../../../../assets/icons-svg/search.svg' 

const ChatPageHeader = () => {
  return (
    <div className='chat-page-header' >
      <div>
        <div>
          <img src="https://tse1.mm.bing.net/th?id=OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ&pid=Api&P=0&h=180" alt="" />
        </div>
        <div>
          <div>Paulos Ab</div>
          <div>last seen yesterday</div>
        </div>
      </div>

      <div className='icon-container' >
        <div><VideoIcon/></div>
        <div><CallIcon className='smaller'/></div>
        <div><SearchIcon className='smaller'/></div>
      </div>
    </div>
  )
}

export default ChatPageHeader