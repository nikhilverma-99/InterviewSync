import React from "react";
import "./Question.css";
import { useCodeCollabContext } from "../../App";
import {difficultyText, difficultyBackground,EditorThemeColor} from '../constants/theme'
const Question = (props) => {
  const { selectedTheme, setSelectedTheme } = useCodeCollabContext();
  
  const questionData = props.questionData;
  if (!questionData) {
    return null; // or some placeholder content
  } 
  const currentYear = new Date().getFullYear();
  return (
    <section style={{display:'flex',flexDirection:'column'}}>

    <section
      className="question-section"
      style={{ backgroundColor: `${EditorThemeColor[selectedTheme]}` }}
    >
      <div className="heading-container">
        <a className="heating-content">{questionData?.question}</a>
      </div>
      <div className="tags">
        <div className="tag-content">
          <a
            className="tag"
            style={{
              color: `${difficultyText[questionData.difficulty]}`,
              background: `${difficultyBackground[questionData.difficulty]}`,
            }}
          >
            {questionData.difficulty}
          </a>
        </div>
      </div>
      <div className="question-description">
        {questionData.questionDescription.map((val) => {
          return <p className="question-paragraph">{val}</p>;
        })}
      </div>
      <div className="question-examples">
        {questionData.examples.map((val, index) => {
          return (
            <div className="question-example">
              <p className="example">Example {index + 1}: </p>
              <div className="example-content">
                <div className="question-input">
                  <span>Input: </span>
                  <a>{val.input}</a>
                </div>
                <div className="question-output">
                  <span>Output: </span>
                  <a>{val.output}</a>
                </div>
                <div className="question-explaination">
                  <span>Explaination: </span>
                  <a> {val.explanation}</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="question-constraints">
        <span className="constraint-heading">Constraints:</span>
        <ul className="contraints-list">
          {questionData.constraints.map((val, index) => {
            return <li>{val}</li>;
          })}
        </ul>
      </div>
        <footer className="question-footer">
          <p>Copyright &copy; {currentYear} CodeColab. All rights reserved.</p>
        </footer>
    </section>
    </section>
  );
};

export default Question;
