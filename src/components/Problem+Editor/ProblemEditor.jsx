import React from "react";
import Question from "../Question/Question";
import Editor from '../CodeEditor/Editor'
import './ProblemEditor.css'

const ProblemEditor = () => {
  return (
        <div className="problemEditor">
            <Question></Question>
            <div className="intersection"></div>
            <Editor></Editor>
        </div>
  )
};

export default ProblemEditor;
