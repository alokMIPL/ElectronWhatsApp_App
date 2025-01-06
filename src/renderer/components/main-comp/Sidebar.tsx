// import React from "react";

// const Sidebar = React.memo((props: any) => {
//   return 
//     <div className="app-sidebar" >
//       Hello Sidebar
//     </div>
// })

// export default Sidebar;

import React from 'react'
import {SidebarIcon} from '../../shared/ReUseables'
import {ReactComponent as ChatIcon} from '../../../../assets/icons-svg/chat-128.svg'  
import {ReactComponent as CallIcon} from '../../../../assets/icons-svg/call-27.svg'  
import {ReactComponent as StatusIcon} from '../../../../assets/icons-svg/Status.svg'
import {ReactComponent as ArchiveIcon} from '../../../../assets/icons-svg/archivebox-2.svg'  
import {ReactComponent as StarIcon} from '../../../../assets/icons-svg/star-86.svg'  
import {ReactComponent as SettingsIcon} from '../../../../assets/icons-svg/gear-66.svg'  

const Sidebar = () => {
  return (
    <div className='app-sidebar' >
      <div>
        <SidebarIcon>
          <ChatIcon className='bigger' />
        </SidebarIcon>

        <SidebarIcon>
          <CallIcon/>
        </SidebarIcon>
        
        <SidebarIcon>
          <StatusIcon/>
        </SidebarIcon>
        
        <hr className="separator" />

        <SidebarIcon>
          <ArchiveIcon/>
        </SidebarIcon>
      
        <SidebarIcon>
          <StarIcon/>
        </SidebarIcon>
      </div>
      <div>
        <SidebarIcon>
          <SettingsIcon/>
        </SidebarIcon>
      </div>
    </div>
  )
}

export default Sidebar