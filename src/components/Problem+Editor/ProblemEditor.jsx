import React,{useState,useEffect  } from "react";
import Question from "../Question/Question";
import Editor from '../CodeEditor/Editor'
import './ProblemEditor.css'
import { useCodeCollabContext } from "../../App";
import Logo from '../../images/Logo.svg'
import WhiteLogo from '../../images/LightLogo.svg'
import VideoDraggable from "../VideoDraggable/VideoDraggable";
import NavBar from "../NavBar/NavBar";
import VideoCall from "../Dyanamic Width Components/VideoCall";
import { EditorThemeColor,themeBackground,fontColor } from "../constants/theme";
const ProblemEditor = () => {
 
  //adjustable width 
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [difference, setDifference] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false); 
  const leftStyle = {  
    boxSizing: "border-box",
  };
  const rightStyle = {  
    boxSizing: "border-box",
  };
// 665 -178
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - startX;
      setStartX(e.clientX);

      // Calculate the difference from the middle div based on deltaX
      const newDifference = difference + deltaX;
      if(newDifference>=-178 && newDifference<=665)
        setDifference(newDifference); 
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

 
  // useEffect(() => { 
  //   const handleFullscreenChange = () => {
  //     setIsFullscreen(!!document.fullscreenElement);
      
  //     if (!document.fullscreenElement) {
  //       alert("Exited fullscreen!");
  //     }
  //   };

  //   document.addEventListener("fullscreenchange", handleFullscreenChange);

  //   return () => {
  //     document.removeEventListener("fullscreenchange", handleFullscreenChange);
  //   };
  // }, []);
  const questionData={ 
    constraints:[`1 <= words.length <= 100`,`1 <= words[i].length <= 100`,`words[i] consists of lowercase English letters.`],
    difficulty:[`Easy`],
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
  const {selectedTheme,setSelectedTheme} = useCodeCollabContext();
  
  return (
    <>
    {/* <VideoDraggable color={{backgroundColor:`${EditorThemeColor[selectedTheme]}`,title:`${themeBackground[selectedTheme]}`,fontColor:`${fontColor[selectedTheme]}`}}></VideoDraggable> */}
    <VideoCall></VideoCall>
    <section  className="problemEditorSection" style={{backgroundColor:`${EditorThemeColor[selectedTheme]}`,color: fontColor[selectedTheme]}}>

     <header id="header" className=  "problemNavbar" > 
        <figure> 
            <img
              className="logo"
              alt="CodeCollab logo" loading="lazy"
              src={(selectedTheme==='vs-light')?Logo:WhiteLogo}
            />  
        </figure>
      </header> 
        <div className="problemEditor"  onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp} style={{backgroundColor:`${themeBackground[selectedTheme]}`}} >
          <div style={{ ...leftStyle, width: `calc(60rem + ${difference}px)` }}>
            <Question questionData={questionData}></Question>
          </div>

            <div className="intersection" onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp} style={{backgroundColor:`${EditorThemeColor[selectedTheme]}`,zIndex:'10'}}></div>
          <div style={{ ...rightStyle, width: `calc(100% - 60rem - ${difference}px)` }}>
             <Editor ></Editor>
          </div>

        </div>
    </section>
    </>
  )
};

export default ProblemEditor;
