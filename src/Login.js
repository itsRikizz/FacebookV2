import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import "./login.css";

function Login() {
  const [, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });

        console.log(result);
      })
      .catch((error) => alert(error.message));
  };
  const componentStyle = {
    backgroundImage: `url(https://cdn.wallpapersafari.com/75/62/DV9cIm.jpg)`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backdropFilter: "blur(10px)  brightness(2.5)",
  };
  const logoStyle = {
    filter: "drop-shadow(0 0 10px  #00008B)",
  };
  return (
    <div className='login' style={componentStyle}>
      <div className='login___logo'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png'
          alt=''
          style={logoStyle}
        />
        <img
          src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
          alt=''
        />
      </div>
      <Button type='submit' onClick={signIn}>
        Sign IN
      </Button>
      <footer>
        <p style={{ color: "black" }}>💙 Facebook V2 💙</p>
        <p style={{ color: "white" }}>Developed By Sanmay Paine</p>
      </footer>
    </div>
  );
}

export default Login;
