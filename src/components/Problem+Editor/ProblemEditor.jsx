import React from "react";
import Question from "../Question/Question";
import Editor from '../CodeEditor/Editor'
import './ProblemEditor.css'
import { useCodeCollabContext } from "../../App";

const ProblemEditor = () => {
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
            <Question questionData={questionData}></Question>
            <div className="intersection" style={{backgroundColor:`${EditorThemeColor[selectedTheme]}`}}></div>
            <Editor ></Editor>
        </div>
  )
};

export default ProblemEditor;
