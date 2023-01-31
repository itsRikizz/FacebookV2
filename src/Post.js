import { Avatar } from "@mui/material";
import React, { useState } from "react";
import db from "./firebase";
import firebase from "firebase/compat/app";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";

import "./post.css";
import { useStateValue } from "./StateProvider";

function Post() {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      messege: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      userName: user.displayName,
      image: imageUrl,
    });
    setInput("");
    setImageUrl("");
  };
  return (
    <div className='post'>
      <div className='post___top'>
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='messageSender___input'
            placeholder={`Whats On Your Mind?, ${user.displayName}`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder='Image Url'
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      <div className='post___buttom'>
        <div className='messegeSender___option'>
          <VideocamIcon style={{ color: "red" }} />
          <h5>Live Video</h5>
        </div>
        <div className='messegeSender___option'>
          <PhotoLibraryOutlinedIcon style={{ color: "green" }} />
          <h5>Photos/Video</h5>
        </div>
        <div className='messegeSender___option'>
          <EmojiEmotionsOutlinedIcon style={{ color: "orange" }} />
          <h5>Feeling/Activity</h5>
        </div>
      </div>
    </div>
  );
}

export default Post;
