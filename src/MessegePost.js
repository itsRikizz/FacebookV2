import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

import "./messegePost.css";

function MessegePost({ profilepic, image, username, timestamp, messege }) {
  const [color, setColor] = useState("");
  const [like, setLike] = useState("Like");

  const handleLike = () => {
    setColor("2e81f4");
    setLike("Liked!!");
  };
  return (
    <div className='messegePost'>
      <div className='post___top'>
        <Avatar src={profilepic} className='post___avatar' />
        <div className='post___topInfo'>
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toLocaleTimeString()}</p>
        </div>
      </div>
      <div className='post___bottom'>
        <p>{messege}</p>
      </div>
      <div className='post___image'>
        <img src={image} alt='' />
      </div>
      <div className='post___options'>
        <div className='post___option' onClick={handleLike}>
          <ThumbUpAltRoundedIcon style={{ color: color }} />
          <p>{like}</p>
        </div>
        <div className='post___option'>
          <TextsmsRoundedIcon />
          <p>Comment</p>
        </div>
        <div className='post___option'>
          <SendRoundedIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default MessegePost;
