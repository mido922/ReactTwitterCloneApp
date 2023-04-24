import React from 'react'
import "./ProfileView.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function ProfileView() {


  return (
    <div id="profileViewContainer">
        <img src="https://pbs.twimg.com/profile_images/789180092257738753/DPsVKaM5_400x400.jpg" id="profileImage" alt="Avatar"></img>
        <div id="profileViewTextContainer">
            <div id="profileViewText">mido9</div>
            <div id="profileViewHandle">@mido9_2</div>
        </div>
        <div id="profileViewDots"><MoreHorizIcon /></div>
    </div>
  )
}

export default ProfileView