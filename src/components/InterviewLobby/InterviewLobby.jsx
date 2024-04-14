import React, { useState, useEffect } from "react";
import "./InterviewLobby.css";

import { getProblemById } from "../../Axios";

import socket from "../../socket";
import LobbyData from "./lobbyData";
import Logo from "../../images/Logo.svg";
import LoadingIcons from "react-loading-icons";
import { useNavigate, useSearchParams } from "react-router-dom";
const InterviewLobby = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const params = useSearchParams();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % LobbyData.length);
    }, 4500); // 2000 milliseconds = 2 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const interviewStarted = async(() => {
      return await.getProblemById(params[0].get("_id"));
    });
    const alreadyStarted = interviewStarted; //api call
    if (alreadyStarted?.data?.interviewObj?.problems.length > 0) {
      navigate(`/problemEditor/C?_id=${params[0].get("_id")}}`);
    }

    socket.on("interview-started", () => {
      console.log("Redirectiong to b ahjsd sasd");

      navigate(`/problemEditor/C?_id=${params[0].get("_id")}}`);
    });
    return () => {
      socket.off("interview-started");
    };
  }, [socket]);

  return (
    <main style={{ height: "100vh" }}>
      <header className="lobby-header">
        <figure>
          <img src={Logo} alt="logo" style={{ height: "5.1rem" }} />
        </figure>
      </header>
      <div className="interviewLobby-content">
        <div className="interviewLobby-mainContent">
          <div className="interviewLobby-quote">
            <div className="quote-data">
              <blockquote className="quote">
                {LobbyData[index].quote}
              </blockquote>
              <p className="quote-author">&mdash; {LobbyData[index].author}</p>
            </div>
          </div>
          <div className="image-transition-container">
            {LobbyData.map((val, i) => (
              <img
                key={i}
                src={val.img}
                alt={`Image ${i + 1}`}
                className={`image-transition ${
                  i === index ? "visible" : "hidden"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="lobby-loading">
          <LoadingIcons.Grid
            fill="#B6BBC4"
            speed={1}
            style={{ transform: "scale(0.6)" }}
          />
        </div>
      </div>
    </main>
  );
};

export default InterviewLobby;
