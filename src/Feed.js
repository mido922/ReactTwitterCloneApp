import React, { useState, useEffect } from 'react';
import Tweetbox from './Tweetbox.js';
import Post from "./Post";
import "./Feed.css";
import db from './firebase';
import { doc, setDoc } from "firebase/firestore"; 

function Feed() {
  const [posts, setPosts] = useState([])


    useEffect(() => {
      db.collection('posts').onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc => doc.data()))
      ))
    }, []);

  return (
    <div className="feed">
        
        <div className="feed__header">
          <h2>Header</h2>
        </div>
        
        <Tweetbox />

        {/* Post */}
        {posts.map(post =>(
          <Post
          displayName= {post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
          />
        ))}


        <Post displayName="mido9_2"
        username='mido9_2'
        verified={true}
        text="Testing, this should appear"
        avatar="https://pbs.twimg.com/profile_images/789180092257738753/DPsVKaM5_400x400.jpg"
        image="https://i.imgur.com/s4lPxYl.jpeg" />
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