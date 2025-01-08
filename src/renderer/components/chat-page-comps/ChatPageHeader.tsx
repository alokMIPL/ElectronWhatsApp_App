import React from 'react'
import {ReactComponent as VideoIcon} from '../../../../assets/icons-svg/video.svg' 
import {ReactComponent as CallIcon} from '../../../../assets/icons-svg/call-27.svg' 
import {ReactComponent as SearchIcon} from '../../../../assets/icons-svg/search.svg' 
import {ReactComponent as StarredIcon} from '../../../../assets/icons-svg/Icon (3).svg' 
import {ReactComponent as MuteIcon} from '../../../../assets/icons-svg/Icon (2).svg' 
import {ReactComponent as DownloadIcon} from '../../../../assets/icons-svg/Icon (4).svg' 
import {ReactComponent as PadLockIcon} from '../../../../assets/icons-svg/Icon (5).svg' 
import {ReactComponent as PlusIcon} from '../../../../assets/icons-svg/plus.svg' 
// import {ReactComponent as ContactIcon} from '../../../../assets/icons/contact.png' 
import { ListGroup, ListItem } from '../../shared/ReUseables'
import { useAppSelector, useAppDispatch } from '../../shared/hooks'
import { setShowDropdown } from '../../shared/rdx-slice'

export const ChatPageHeader = () => {

  const dispatch = useAppDispatch()

  return (
    <div className='chat-page-header' >
      <div onClick={() => dispatch(setShowDropdown(true))} >
        <div>
          <img src="https://tse1.mm.bing.net/th?id=OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ&pid=Api&P=0&h=180" alt="" />
          <DropdownEl/>
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

export const DropdownEl = React.memo((props: any) => {
  const shouldShow = useAppSelector((state) => state.main.showDropdown);

  React.useEffect(() => {
    document.onclick = (e) => {
      console.log(e)
    }
  },[])

  return (
    <div className={shouldShow ? 'profile-dropdown show' : 'profile-dropdown'} >
      <div className="profile-dropdown-inner">
        <div className='first' >
          <div>
            <img src="https://tse1.mm.bing.net/th?id=OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ&pid=Api&P=0&h=180" alt="" />
          </div>
          <div>
            Paulos Ab
          </div>
          <div className='phone' >
            +234 1234 567 8901
          </div>
        </div>
        <div className='second' >
          <div>
            <CallIcon className='smaller'/>
            <div>Audio</div>
          </div>
          <div>
            <VideoIcon/>
            <div>Video</div>
          </div>
          <div>
            <SearchIcon className='smaller'/>
            <div>Search</div>
          </div>
        </div>

        <div className='third px-2'>
          <div className='mb-3' >
            <ListGroup>
              <ListItem 
                icon={<StarredIcon/>} 
                title='Starred messages'
                isRoute={true}
              />
            </ListGroup>
          </div>

          <div className='mb-3'>
            <ListGroup>
              <ListItem 
                icon={<MuteIcon/>} 
                title='Mute'
              />
              <ListItem 
                icon={<DownloadIcon/>} 
                title='Save to Downloads'
              />
            </ListGroup>
          </div>

          <div className='mb-3'>
            <ListGroup>
              <ListItem 
                icon={<PadLockIcon/>} 
                title='Encryption'
                isRoute
                info='Message and calls are end-to-end encrypted. Click to verify'
              />
              <ListItem 
                icon={<DownloadIcon/>} 
                title='Disappering Messages'
              />
            </ListGroup>
          </div>

          <div className='mb-3' >
            <ListGroup>
              <ListItem 
                icon={<StarredIcon/>} 
                title='Contact Details'
                isRoute={true}
              />
            </ListGroup>
          </div>
        </div>

        <div className='fourth px-2 mb-3 '>
          <div>
            No Groups in Common
          </div>

          <ListItem 
            icon={<PlusIcon className='has-stroke' />} 
            title='Create Group with Paulos Ab'
            style={{color: "var(--app-light-green)"}}
          />
        </div>

        <div className='fifth px-2 mb-3 ' >
          <ListGroup>
            <ListItem
              title='Share Contact'
            />
            <ListItem
              title='Export Chat '
            />
            <ListItem
              title='Clear Chat'
            />
          </ListGroup>
        </div>

        <div className='sixth px-2 mb-3 ' >
          <ListGroup>
            <ListItem
              title='Block Paulos AB'
            />
            <ListItem
              title='Report Paulos AB'
            />
          </ListGroup>
        </div>

      </div>
    </div>
  )
})

export default ChatPageHeader