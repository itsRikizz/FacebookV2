import React from "react";
import Sidebar from "./Sidebar";
import Watchlist from "./Watchlist";

function Watch() {
  return (
    <>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='watch' style={{ marginLeft: "223px" }}>
        <Watchlist
          profilepic='https://www.iconsdb.com/icons/preview/red/play-3-xxl.png'
          username='Watch Now'
          video='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
        />
        <Watchlist
          profilepic='https://www.iconsdb.com/icons/preview/red/play-3-xxl.png'
          username='Watch Now'
          video='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
        />

        <Watchlist
          profilepic='https://www.iconsdb.com/icons/preview/red/play-3-xxl.png'
          username='Watch Now'
          video='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
        />
      </div>
    </>
  );
}

export default Watch;
