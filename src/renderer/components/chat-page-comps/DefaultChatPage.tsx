import React from 'react'
import {ReactComponent as WhatsappIcon} from '../../../../assets/icons-svg/whatsapp.svg' 
import {ReactComponent as PadlockIcon} from '../../../../assets/icons-svg/padlock.svg' 

const DefaultChatPage = () => {
  return (
    <div className='default-chat-page'>
      <div>
        <WhatsappIcon/>
      </div>
      <div>WhatsApp for Mac</div>
      <div>
        <div className='encr-message'>
          <PadlockIcon/>
          Your personal messages are
          <span>end-to-end encrypted</span>
        </div>
      </div>
    </div>
  )
}

export default DefaultChatPage