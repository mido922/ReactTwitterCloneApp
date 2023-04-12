import React from 'react'
import "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
        Hello
        <TwitterIcon />

        <SidebarOption active Icon={HomeIcon} text ="Home"/>
        <SidebarOption Icon={HomeIcon} text ="Explore"/>
        <SidebarOption Icon={HomeIcon} text ="Notifications"/>
        <SidebarOption Icon={HomeIcon} />

        <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

    </div>
  )
}

export default Sidebar