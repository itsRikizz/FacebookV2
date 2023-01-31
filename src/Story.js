import { Avatar } from "@mui/material";
import React from "react";
import "./story.css";

function Story({ img, src, title }) {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className='story'>
      <Avatar className='avatar___story' src={src} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
