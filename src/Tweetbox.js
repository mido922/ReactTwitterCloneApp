import React from 'react';
import "./Tweetbox.css";
import { Avatar, Button } from '@mui/material';

function Tweetbox() {
  return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar src=""></Avatar>
                <input placeholder="What's happening?" type="text"></input>
                <input
                 className="tweetBox__imageInput"
                 placeholder="Enter image URL"
                 type ="text" 
                />
            </div>
            <Button className="tweetBox__tweetButton">Tweet</Button>

        </form>
    </div>
  )
}

export default Tweetbox