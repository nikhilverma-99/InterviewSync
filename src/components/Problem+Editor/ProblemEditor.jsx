import React from "react";
import Question from "../Question/Question";
import Editor from '../CodeEditor/Editor'
import './ProblemEditor.css'
import { useCodeCollabContext } from "../../App";

const ProblemEditor = () => {
  const {selectedTheme,setSelectedTheme} = useCodeCollabContext();
  const EditorThemeColor ={
      'vs-dark': '#2f2f2f',
      'vs-light': '#002eb8',
      'monokai': '#2f2f2f',
      'cobalt':'#01111f', 
    }
    const themeBackground ={
      'vs-dark': '#514f4f',
      'vs-light': '#003cef',
      'monokai': '#4f4c4c',
      'cobalt':'#042e53', 
    }
  return (
        <div className="problemEditor" style={{backgroundColor:`${themeBackground[selectedTheme]}`}} >
            <Question></Question>
            <div className="intersection" style={{backgroundColor:`${EditorThemeColor[selectedTheme]}`}}></div>
            <Editor></Editor>
        </div>
  )
};

export default ProblemEditor;
