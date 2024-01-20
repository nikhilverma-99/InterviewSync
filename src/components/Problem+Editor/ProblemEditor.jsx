import React, { useState, useRef, useEffect } from 'react';
import './ProblemEditor.css'; // Import your CSS file 
import Editor from '../CodeEditor/Editor'
import VideoDraggable from '../VideoDraggable/VideoDraggable';
import { useCodeCollabContext } from "../../App";

import Logo from '../../images/Logo.svg'
import WhiteLogo from '../../images/LightLogo.svg'
import { EditorThemeColor,themeBackground,fontColor } from "../constants/theme";
import Question from '../Question/Question';

const Adjustable = () => {
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [leftContent, setLeftContent] = useState('Left Content');
  const containerRef = useRef(null);
  const {selectedTheme,setSelectedTheme} = useCodeCollabContext();


  const leftStyle = {
    background: 'red', 
  };
  const rightStyle = {
    background: 'green', 
  };

  const handleMouseDown = (event) => {
    // Check if the event target is the middle div
    if (event.target.classList.contains('middle')) {
      
      setDragging(true);
    }
  };

  const handleMouseUp = () => {
    document.body.style.cursor = ''; 

    setDragging(false);
  };

  const handleMouseMove = (event) => {
    if (dragging) {
      const mouseX = event.clientX;
      const containerX = containerRef.current.getBoundingClientRect().left;
      const middleX = containerX + containerRef.current.offsetWidth / 2;
      const offset = mouseX - middleX;  
      document.body.style.cursor = 'ew-resize'; 
      const newOffset = Math.max(Math.min(offset, containerRef.current.offsetWidth / 2 - 25), -containerRef.current.offsetWidth / 2 + 25);

      setDragOffset(newOffset);
    }
  };
  const questionData={ 
    constraints:[`1 <= words.length <= 100`,`1 <= words[i].length <= 100`,`words[i] consists of lowercase English letters.`],
    difficulty:[`Hard`],
    examples:[{
        input:'words = ["abc","aabc","bc"]',output:'true',explanation:`Move the first 'a' in words[1] to the front of words[2],to make words[1] = "abc" and words[2] = "abc". All the strings are now equal to "abc", so return true.`
    }],
    question:"Redistribute Characters to Make All Strings Equal",
    questionDescription:[
        "You are given an array of strings words (0-indexed).",
        "In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].\n\n",
        "Return true if you can't make every string in words equal using any number of operations, and false otherwise."
    ]
} 

  return (
    <>
     <VideoDraggable color={{backgroundColor:`${EditorThemeColor[selectedTheme]}`,title:`${themeBackground[selectedTheme]}`,fontColor:`${fontColor[selectedTheme]}`}}></VideoDraggable>
     <header id="header" className=  "problemNavbar" style={{backgroundColor:`${EditorThemeColor[selectedTheme]}`}} > 
        <figure> 
            <img
              className="logo"
              alt="CodeCollab logo" loading="lazy"
              src={(selectedTheme==='vs-light')?Logo:WhiteLogo}
            />  
        </figure>
      </header> 
      <div
        ref={containerRef}
        className={`adjustableContainer ${dragging ? 'resizing' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{backgroundColor:`${EditorThemeColor[selectedTheme]}`,color: fontColor[selectedTheme]}}
      >
        <div className="left" style={{ ...leftStyle, backgroundColor:`${themeBackground[selectedTheme]}`,width: `calc(50% + ${dragOffset}px)` }}>
           <Question questionData={questionData}></Question>
        </div>

        <div
          className="middle"
          onMouseDown={handleMouseDown}
          style={{ width: '2.5px',borderRadius:'5px', backgroundColor: `${themeBackground[selectedTheme]}`, cursor: 'ew-resize' }}
        ></div>

        <div className="right" style={{ ...rightStyle, backgroundColor:`${themeBackground[selectedTheme]}`, width: `calc(50% - ${dragOffset}px)` }}>
          <Editor></Editor>
        </div> 
      </div>
      </>
  );
};

export default Adjustable;

