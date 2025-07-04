import React, { useState, useRef, useEffect } from "react";
import "./ProblemEditor.css"; // Import your CSS file
import Editor from "../CodeEditor/Editor";
import VideoDraggable from "../VideoDraggable/VideoDraggable";
import { useCodeCollabContext } from "../../App";

import { useSearchParams } from "react-router-dom";
import { getProblemById } from "../../Axios";
import Logo from "../../images/Logo.svg";
import WhiteLogo from "../../images/LightLogo.svg";
import {
  EditorThemeColor,
  themeBackground,
  fontColor,
} from "../constants/theme";
import Question from "../Question/Question";
import socket from "../../socket";

const Adjustable = () => {
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [leftContent, setLeftContent] = useState("Left Content");
  const [questions, setQuestions] = useState([]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [cIndex, setcIndex] = useState(0);
  const containerRef = useRef(null);
  const { selectedTheme, setSelectedTheme } = useCodeCollabContext();
  const params = useSearchParams();

  const leftStyle = {
    background: "red",
  };
  const rightStyle = {
    background: "green",
  };
  const middleStyle = {
    width: "2.5px",
    borderRadius: "5px",
    backgroundColor: `${themeBackground[selectedTheme]}`,
    cursor: "ew-resize",
  };

  const handleMouseDown = (event) => {
    // Check if the event target is the middle div
    if (event.target.classList.contains("middle")) {
      setDragging(true);
    }
  };

  const handleMouseUp = () => {
    document.body.style.cursor = "";

    setDragging(false);
  };

  const handleMouseMove = (event) => {
    if (dragging) {
      const mouseX = event.clientX;
      const containerX = containerRef.current.getBoundingClientRect().left;
      const middleX = containerX + containerRef.current.offsetWidth / 2;
      const offset = mouseX - middleX;
      document.body.style.cursor = "ew-resize";
      const newOffset = Math.max(
        Math.min(offset, containerRef.current.offsetWidth / 2 - 25),
        -containerRef.current.offsetWidth / 2 + 25
      );

      setDragOffset(newOffset);
    }
  };

  const incIndex = () => {
    // alert("increase");

    setcIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };
  useEffect(() => {
    const interviewId = params[0].get("_id");
    const interviewStarted = async () => {
      const data = await getProblemById(interviewId);
      if (data?.data?.interviewObj?.problems.length > 0) {
        setQuestions(() => {
          return data.data.interviewObj.problems;
        });

        console.log(data);
      }
    };
    interviewStarted();
  }, []);

  useEffect(() => {
    const roomID = localStorage.getItem("roomID");
    if (roomID) {
      try {
        socket.emit("joininterview", roomID);
      } catch (e) {}
    }
  }, []);

  return (
    <>
      <VideoDraggable
        color={{
          backgroundColor: `${EditorThemeColor[selectedTheme]}`,
          title: `${themeBackground[selectedTheme]}`,
          fontColor: `${fontColor[selectedTheme]}`,
        }}
      />
      <header
        id="header"
        className="problemNavbar"
        style={{ backgroundColor: `${EditorThemeColor[selectedTheme]}` }}
      >
        <figure>
          <img
            className="logo"
            alt="CodeCollab logo"
            loading="lazy"
            src={selectedTheme === "vs-light" ? Logo : WhiteLogo}
          />
        </figure>
      </header>

      <div
        ref={containerRef}
        className={`adjustableContainer ${dragging ? "resizing" : ""}`}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          backgroundColor: `${EditorThemeColor[selectedTheme]}`,
          color: fontColor[selectedTheme],
        }}
      >
        <div
          className="left"
          style={{
            ...leftStyle,
            backgroundColor: `${themeBackground[selectedTheme]}`,
            width: `calc(50% + ${dragOffset}px)`,
          }}
        >
          <Question
            questionData={
              questions != null && questions.length > 0
                ? questions[cIndex]
                : null
            }
            index={cIndex}
            incIndex={incIndex}
          ></Question>
        </div>

        <div
          className="middle"
          onMouseDown={handleMouseDown}
          style={middleStyle}
        ></div>

        <div
          className="right"
          style={{
            ...rightStyle,
            backgroundColor: `${themeBackground[selectedTheme]}`,
            width: `calc(50% - ${dragOffset}px)`,
          }}
        >
          <Editor input={input} setOutput={setOutput}></Editor>
        </div>
      </div>

      <div
        style={{
          backgroundColor: `${EditorThemeColor[selectedTheme]}`,
          width: "100vw",
          height: "30vh",
          display: "flex",
          justifyContent: "center", // Add space between the two textareas
          alignItems: "center",
        }}
      >
        <div style={{ width: "47%", height: "90%", marginRight: "10px" }}>
          <TextArea
            placeholder="Input"
            disabled={false}
            setText={setInput}
            value={input}
            background={themeBackground[selectedTheme]}
            color={fontColor[selectedTheme]}
          />
        </div>
        <div style={{ width: "47%", height: "90%", marginLeft: "10px" }}>
          <TextArea
            placeholder="Output"
            disabled={true}
            setText={setOutput}
            value={output}
            background={themeBackground[selectedTheme]}
            color={fontColor[selectedTheme]}
          />
        </div>
      </div>
    </>
  );
};

function TextArea({
  placeholder,
  disabled,
  setText,
  value,
  background,
  color,
}) {
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <textarea
      placeholder={placeholder}
      onChange={handleTextChange}
      disabled={disabled}
      value={value}
      style={{
        backgroundColor: background,
        color: color,
        width: "100%",
        height: "100%",
        border: "none",
        resize: "none",
        borderRadius: "10px",
        padding: "1.4rem",
        fontSize: "2.2rem",
        "::placeholder": {
          color: color,
        },
      }}
    ></textarea>
  );
}

export default Adjustable;
