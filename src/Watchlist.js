import { Avatar } from "@material-ui/core";
import React from "react";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import "./watchlist.css";

function Watchlist({ profilepic, username, video }) {
  return (
    <div className='watchlist'>
      <div className='post___top'>
        <Avatar src={profilepic} className='post___avatar' />
        <div className='post___topInfo'>
          <h3>{username}</h3>
        </div>
      </div>

      <div className='post___image'>
        <video style={{ width: "681px", height: "322px" }} controls>
          <source src={video} type='video/mp4' />
        </video>
      </div>
      <div className='post___options'>
        <div className='post___option'>
          <ThumbUpAltRoundedIcon />
          <p>Like</p>
        </div>
        <div className='post___option'>
          <TextsmsRoundedIcon />
          <p>Comment</p>
        </div>
        <div className='post___option'>
          <SendRoundedIcon />
          <p>Share</p>
        </div>
        <div className='post___option'>
          <AccountCircleRoundedIcon />
          <ExpandMoreRoundedIcon />
        </div>
      </div>
    </div>
  );
}

export default Watchlist;
