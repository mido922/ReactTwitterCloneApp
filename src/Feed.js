import React, { useState, useEffect } from 'react';
import Tweetbox from './Tweetbox.js';
import Post from "./Post";
import "./Feed.css";
import {db} from './firebase';
import { collection} from "firebase/firestore"; 
import { getDocs } from 'firebase/firestore';
import FlipMove from 'react-flip-move';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Feed() {

  const [posts, setPosts] = useState([]);
 
  const fetchPosts = async () => {
      await getDocs(collection(db, "posts"))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
              setPosts(newData);                
              console.log(posts, newData);
            })
  }
  
  useEffect(()=>{
      fetchPosts();
  }, [])

  return (

    <div className="feed">
        <div className="feed__header">
            <ArrowBackIcon/> Home
        </div>
        
        <Tweetbox />

        {/* Post */}
        
        <FlipMove>
        {posts.map(
          post =>(
          <Post
          key={post.id}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image} 
          timestamp={post.timestamp}
          />
        ))}
        </FlipMove>

        <Post displayName="mido9_2"
        username='mido9_2'
        verified={true}
        text="This is a hardcoded test tweet. It does not pull from the Firebase Database."
        avatar="https://pbs.twimg.com/profile_images/789180092257738753/DPsVKaM5_400x400.jpg"
        image="https://i.imgur.com/s4lPxYl.jpeg" 
        timestamp="April 2023"/>
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