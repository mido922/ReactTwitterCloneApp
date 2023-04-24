import React from 'react';
import "./Tweetbox.css";
import { Avatar, Button } from '@mui/material';
import { useState } from 'react';
import {db} from './firebase';
import {collection, addDoc} from "firebase/firestore";

function Tweetbox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => {
   
    try {
        var timeNow = Date()

        var splitText=timeNow.split("GMT");

        const docRef = await addDoc(collection(db, "posts"), {
          avatar: "",
          displayName: "Guest",
          image: tweetImage,
          text: tweetMessage,
          username: "guest",
          verified: false,
          timestamp: splitText[0],
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      setTweetMessage("");
      setTweetImage("");
}

  return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar src=""/>
                <input
                onChange={(e) => setTweetMessage(e.target.value)}
                  value={tweetMessage}
                  placeholder="What's happening?"
                  type="text" />
                <input
                  value={tweetImage}
                  onChange={(e) => setTweetImage(e.target.value)}
                  className="tweetBox__imageInput"
                  placeholder="Enter image URL (Optional)."
                  type ="text" 
                />
            </div>
            <Button
              type="submit"
              onClick={sendTweet}
            className="tweetBox__tweetButton">Tweet</Button>

        </form>
    </div>
  )
}

export default Tweetbox