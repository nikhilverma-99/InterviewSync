import React, { useEffect } from "react";
import "./login.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Bars } from "react-loading-icons";
import logo from "../../images/Logo.svg";
import socket from "../../socket";
import * as api from "../../Axios";
import Loading from "../../images/Loading.gif";
function Login() {
  let [email, setEmail] = useState("");
  let [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useSearchParams();

  async function LoginButton() {
    setLoading(true);
    try {
      let user_email = email.split("/")[0];
      let res = await api.joinInterview({ email: user_email, roomID: token });
      let type = res.data.type;
      console.log(res);
      if (res.status == 200) {
        const interviewId = res?.data?.invObj?._id;
        localStorage.setItem("roomID", res.data.roomID);
        console.log(localStorage.getItem("roomID"));

        socket.emit("joininterview", res.data.roomID);
        if (type == "I") {
          const resumeLink = res?.data?.invObj?.resume_url;
          navigate(
            `/questionSelect?_id=${interviewId}&resumeUrl=${btoa(resumeLink)}`
          );
        } else if (type == "C") {
          console.log(res);
          navigate(`/interviewLobby?_id=${res?.data?._id}`);
        } else {
          alert("please enter your type");
        }
      } else {
        console.log(res);
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  function fSetEmail(e) {
    let value = e.target.value;
    setEmail(value);
  }
  function fSetToken(e) {
    let value = e.target.value;
    setToken(value);
  }

  useEffect(() => {
    const data = params[0]?.get("data");

    if (data) {
      const credentials = JSON.parse(atob(data));
      console.log(credentials);

      if (credentials) {
        setEmail(credentials.email);
        setToken(credentials.token);
      }
    }
    // if (currentUser) {
    //   toast.success(` User is already logged in !`, {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: 2500, // milliseconds
    //     style: {
    //       fontSize: '18px', // Set the desired font size
    //     }

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
    // }
  });
  return (
    <div id="loginContainer">
      <div class="authorize-background"></div>
      <div class="container-login">
        <div class="image_container">
          <img class="logo-container" alt="Logo" src={logo} loading="lazy" />

          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="close"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </a>
        </div>

        <form class="login_info">
          <div class="email">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={fSetEmail}
              autoComplete="on"
            />
          </div>
          <div class="password">
            <input
              placeholder="Token"
              value={token}
              onChange={fSetToken}
              autoComplete="on"
            />
          </div>

          {loading ? (
            <div class="login_button_container">
              <div class="login_button">
                <img style={{ height: "50%" }} src={Loading} />
              </div>
            </div>
          ) : (
            <div class="login_button_container" onClick={LoginButton}>
              <div class="login_button">
                <span>Join Interview</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
