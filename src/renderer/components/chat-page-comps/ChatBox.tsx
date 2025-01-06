import React from 'react'
import {ReactComponent as PlusIcon} from '../../../../assets/icons-svg/plus.svg' 
import {ReactComponent as FileIcon} from '../../../../assets/icons-svg/sticker.svg' 
import {ReactComponent as SmileyFaceIcon} from '../../../../assets/icons-svg/grinning-face.svg'  
import {ReactComponent as MicIcon} from '../../../../assets/icons-svg/mic.svg' 


const ChatBox = () => {
  return (
    <div className='chat-box-container' >
      <div>
        <PlusIcon className='bigger' />
      </div>
      <div className='input-container' >
        <div className="input" contentEditable="true" />
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