import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";

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
        <div className="post_avatar">
            <Avatar src ="" />
        </div>
    </div>
  )
}

export default Post