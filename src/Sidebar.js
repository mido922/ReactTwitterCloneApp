import React from 'react'
import "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ProfileView from './ProfileView.js';

function Sidebar() {
  return (
    <div className="sidebar">
        <SidebarOption active Icon={TwitterIcon}/>
        <SidebarOption active Icon={HomeIcon} text ="Home"/>
        <SidebarOption Icon={TagIcon} text ="Explore"/>
        <SidebarOption Icon={NotificationsIcon} text ="Notifications"/>
        <SidebarOption Icon={MailOutlineIcon} text = "Messages" />
        <SidebarOption Icon={PersonIcon} text = "Profile" />
        <SidebarOption Icon={MoreHorizIcon} text = "More" />

        <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

        <ProfileView />

    </div>
  )
}

export default Sidebar