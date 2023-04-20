import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({
    displayName,
    username,
    verified,
    timestamp,
    text,
    image,
    avatar
}) {
  return (
    <div className="post">
        <div className="post__avatar">
            <Avatar src ={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName} said <span className="post__headerSpecial">
                  {verified && <VerifiedIcon className="post__badge" />}
                  @{username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              {text}
            </div>
          </div>
          <img
            src={image}
            alt="An image goes here" 
          />
          <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
    </div>
  )
}

export default Post