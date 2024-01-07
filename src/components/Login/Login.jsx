import React, { useEffect } from "react";
import "./login.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Bars } from "react-loading-icons"; 
import logo from "../../images/Logo.png"; 
import socket from "../../socket"
import * as api from "../../Axios"
function Login() { 
  let [email, setEmail] = useState("");
  let [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  async function LoginButton() { 
      
      let res = await api.joinInterview()
      if(res.status==200){

        localStorage.setItem("roomID",res.data)
        console.log(localStorage.getItem("roomID"));
        socket.emit('joininterview',res.data) // emiting join room event
        navigate('/problemEditor') 
      }else{
        console.log(res)
      }
  }

  function fSetEmail(e) {
    let value = e.target.value;
    setEmail(value);
  }
  function fSetToken(e) {
    let value = e.target.value;
    setToken(value);
  }
  useEffect(()=>{
    
    // if (currentUser) {
    //   toast.success(` User is already logged in !`, {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: 2500, // milliseconds
    //     style: {
    //       fontSize: '18px', // Set the desired font size
    //     }
    //   });
  
    //   navigate("/")
    // }
  })
  return (
    <>
      <>
        {" "}
        <div className="authorize-background"></div>
        <div className="container-login">
          <div className="image_container">
            <img className="logo-container" alt="Logo" src={logo} loading="lazy" />

            <NavLink to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className="close"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </NavLink>
          </div>

          <form className="login_info">
            <div className="email">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={fSetEmail}
                autoComplete="on"
              />
            </div>
            <div className="password">
              <input 
                placeholder="Token"
                value={token}
                onChange={fSetToken}
                autoComplete="on"
              />
            </div>

            {loading ? (
              <div className="loading-circle">
                <Bars className="loader" />
              </div>
            ) : (
              <>
                {" "}
                <div className="login_button_container" onClick={LoginButton}>
                  <div className="login_button">
                    <span>Join Interview</span>
                  </div>
                </div> 
              </>
            )}
          </form>
        </div>
      </>
    </>
  );
}

export default Login;
