import React,{useState} from "react";
import Question from "../Question/Question";
import Editor from '../CodeEditor/Editor'
import './ProblemEditor.css'
import { useCodeCollabContext } from "../../App";
import VideoDraggable from "../VideoDraggable/VideoDraggable";
const ProblemEditor = () => {
//adjustable width
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [difference, setDifference] = useState(0);

  const leftStyle = {  
    boxSizing: "border-box",
  };
  const rightStyle = {  
    boxSizing: "border-box",
  };

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
      setDifference(newDifference);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

//

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
  const EditorThemeColor ={
      'vs-dark': '#2f2f2f',
      'vs-light': '#002eb8',
      'monokai': '#272822',
      'cobalt':'#01111f', 
    }
    const themeBackground ={
      'vs-dark': '#514f4f',
      'vs-light': '#003cef',
      'monokai': '#4f4c4c',
      'cobalt':'#042e53', 
    }
  return (
    <>
    <VideoDraggable></VideoDraggable>
        <div className="problemEditor"  onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp} style={{backgroundColor:`${themeBackground[selectedTheme]}`}} >
          <div style={{ ...leftStyle, width: `calc(60rem + ${difference}px)` }}>
            <Question questionData={questionData}></Question>
          </div>

            <div className="intersection" onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp} style={{backgroundColor:`${EditorThemeColor[selectedTheme]}`}}></div>
          <div style={{ ...rightStyle, width: `calc(100% - 60rem - ${difference}px)` }}>
             <Editor ></Editor>
          </div>

        </div>
    </>
  )
};

export default ProblemEditor;
