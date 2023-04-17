import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';

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
            <Avatar src ="" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                mido said <span>
                  <VerifiedIcon className="post__badge" />
                </span>
              </h3>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Post