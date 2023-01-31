import React from "react";
import FlagCircleRoundedIcon from "@mui/icons-material/FlagCircleRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import "./widgets.css";

function Widgets() {
  return (
    <div className='widgets'>
      <div className='pageSection'>
        <h3>Your Pages and profiles</h3>
        <div className='page___info'>
          <FlagCircleRoundedIcon fontSize='large' style={{ color: "gray" }} />
          <h4>Last Seen</h4>
        </div>
        <div className='notification___info'>
          <NotificationsRoundedIcon
            fontSize='large'
            style={{ color: "gray" }}
          />
          <h4>8 Notifications</h4>
        </div>
        <div className='campain___info'>
          <CampaignRoundedIcon fontSize='large' style={{ color: "gray" }} />
          <h4>Create promotion</h4>
        </div>
        <hr />
      </div>
      <iframe
        title='myFrame'
        src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbohemian056&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
        width='340'
        height='100%'
        style={{ border: "none", overflow: "hidden" }}
        allowFullScreen={true}
        allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
      ></iframe>
    </div>
  );
}

export default Widgets;
