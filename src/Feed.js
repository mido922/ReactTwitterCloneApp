import React from 'react';

import Tweetbox from './Tweetbox.js';
import Post from "./Post";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
        
        <div className="feed__header">
          <h2>Header</h2>
        </div>
        
        <Tweetbox />

        {/* Post */}
        <Post />
        <Post />
        {/* Post */}
        {/* Post */}
        {/* Post */}
        {/* Post */}
        {/* Post */}
        {/* Post */}
    </div>
  )
}

export default Feed