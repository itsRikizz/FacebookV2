import React from "react";
import SidebarRow from "./SidebarRow";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import BookmarksRoundedIcon from "@mui/icons-material/BookmarksRounded";
import RecentActorsRoundedIcon from "@mui/icons-material/RecentActorsRounded";
import Diversity2RoundedIcon from "@mui/icons-material/Diversity2Rounded";
import "./sidebar.css";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }] = useStateValue();
  return (
    <div className='sidebar'>
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={PeopleAltRoundedIcon} title='Friends' />
      <SidebarRow Icon={UpdateRoundedIcon} title='Memories' />
      <SidebarRow Icon={BookmarksRoundedIcon} title='Saved' />
      <SidebarRow Icon={RecentActorsRoundedIcon} title='Most Recent' />
      <SidebarRow Icon={Diversity2RoundedIcon} title='Groups' />
      <hr />
    </div>
  );
}

export default Sidebar;
