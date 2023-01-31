import React, { useState } from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import SearchIcon from "@mui/icons-material/Search";
import LaptopRoundedIcon from "@mui/icons-material/LaptopRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Avatar, IconButton } from "@material-ui/core";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import DialpadRoundedIcon from "@mui/icons-material/DialpadRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";
import "./header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div className='header'>
      <div className='header___left'>
        <img
          src='https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png'
          alt=''
        />
        <div className='header___input'>
          <SearchIcon fontSize='large' />
          <input type='text' placeholder='Search' />
        </div>
      </div>
      <div className='header___middle'>
        <div className='header___option header___option--active'>
          <Link to='/'>
            <HomeRoundedIcon fontSize='large' style={{ color: "inherit" }} />
          </Link>
        </div>
        <div className='header___option '>
          <Link to='/watch'>
            <LaptopRoundedIcon fontSize='large' style={{ color: "inherit" }} />
          </Link>
        </div>
        <div className='header___option'>
          <GroupsRoundedIcon
            fontSize='large'
            onClick={handleClick}
            style={{ color: "inherit" }}
          />
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <Box
              sx={{
                borderRadius: 11,
                p: 1,
                mt: 3,
                bgcolor: "background.paper",
              }}
            >
              This Section is Unavailable 😔
            </Box>
          </Popper>
        </div>
        <div className='header___option'>
          <ExtensionRoundedIcon
            fontSize='large'
            onClick={handleClick}
            style={{ color: "inherit" }}
          />
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <Box
              sx={{
                borderRadius: 11,
                p: 1,
                mt: 3,
                bgcolor: "background.paper",
              }}
            >
              This Section is also Unavailable 😭
            </Box>
          </Popper>
        </div>
      </div>
      <div className='header___right'>
        <IconButton>
          <DialpadRoundedIcon />
        </IconButton>
        <IconButton>
          <ChatRoundedIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveOutlinedIcon />
        </IconButton>
        <div className='header___info'>
          <Avatar className='profile' src={user.photoURL} />
        </div>
      </div>
    </div>
  );
}

export default Header;
