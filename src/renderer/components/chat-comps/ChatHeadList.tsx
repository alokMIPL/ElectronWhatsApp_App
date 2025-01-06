import React from 'react'
import ChatHeadListHeader from './ChatHeadListHeader'
import SearchBox from './SearchBox'
import {ChatHead} from '../../shared/ReUseables'
import {ReactComponent as PadlockIcon} from '../../../../assets/icons-svg/padlock.svg' 
import { IChatHead } from '../../shared/types'
import contacts from '../../shared/contacts';

const ChatHeadList = React.memo((props: any) => {

  const [chatHeads, setChatHeads] = React.useState<IChatHead[]>([]);
  const handleFetchChatHeads = React.useCallback(() => {
  },[])

  React.useLayoutEffect(() => {
  },[])

  return (
    <div className='route-comp-1 chat-head-list'>
      <ChatHeadListHeader />
      <SearchBox />
      <div>
        {
          contacts.map(contact => 
            <ChatHead data={contact} />
            // <ChatHead data={contact} key={contact.id} />
          )
        }
      </div>
      <div className='encr-message'>
        <PadlockIcon/>
        Your personal messages are
        <span>end-to-end encrypted</span>
      </div>
    </div>
  )
})

export default ChatHeadList