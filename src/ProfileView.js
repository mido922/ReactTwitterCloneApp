import React from 'react'
import "./ProfileView.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function ProfileView() {


  return (
    <a href="https://github.com/mido922" >
      <div id="profileViewContainer">
          <img src="https://pbs.twimg.com/profile_images/789180092257738753/DPsVKaM5_400x400.jpg"
          id="profileImage" alt="Avatar" />
          <div id="profileViewTextContainer">
              <div id="profileViewText">mido9</div>
              <div id="profileViewHandle">@mido9_2</div>
          </div>
          <div id="profileViewDots"><MoreHorizIcon /></div>
      </div>
    </a>
  )
}

export default ProfileView