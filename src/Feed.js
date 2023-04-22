import React, { useState, useEffect } from 'react';
import Tweetbox from './Tweetbox.js';
import Post from "./Post";
import "./Feed.css";
import {db} from './firebase';
import { collection, doc, getdoc, setDoc, onSnapshot, ref, getDoc, QuerySnapshot } from "firebase/firestore"; 
import { getFirestore, getDocs } from 'firebase/firestore';
import FlipMove from 'react-flip-move';

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
          <h2>Header</h2>
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
          />
        ))}
        </FlipMove>

        <Post displayName="mido9_2"
        username='mido9_2'
        verified={true}
        text="Testing, this is hardcoded"
        avatar="https://pbs.twimg.com/profile_images/789180092257738753/DPsVKaM5_400x400.jpg"
        image="https://i.imgur.com/s4lPxYl.jpeg" />
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