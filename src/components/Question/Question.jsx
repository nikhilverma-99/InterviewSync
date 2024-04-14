import React from "react";
import "./Question.css";
import { fontColor } from "../constants/theme";
import { useCodeCollabContext } from "../../App";
const Question = (props) => {
  const { selectedTheme, setSelectedTheme } = useCodeCollabContext();
  if (!selectedTheme) {
    setSelectedTheme("cobalt");
  }
  const EditorThemeColor = {
    "vs-dark": "#2f2f2f",
    "vs-light": "#eceff1",
    cobalt: "#01111f",
  };
  const questionData = props.questionData;
  const incIndex = props.incIndex;
  const index = props.index;
  console.log(incIndex);
  if (!questionData) {
    return null; // or some placeholder content
  }

  const difficultyText = {
    Easy: "#3eff00",
    Medium: "#ffcc00",
    Hard: "#ff0000",
  };
  const difficultyBackground = {
    Easy: "#5de92f73",
    Medium: "#ffcc0099",
    Hard: "#ff000054",
  };

  const difficultyTextLight = {
    Easy: "#3eff00",
    Medium: "#ffcc00",
    Hard: "#ff0000",
    // color: rgb(34 139 0);
    // background: rgba(93, 233, 47, 0.45);
    // color: rgb(227 171 0);
    // background: rgb(255 205 4 / 19%);
    // background:#ff000045
  };
  const difficultyBackgroundLight = {
    Easy: "#5de92f73",
    Medium: "#ffcc0099",
    Hard: "#ff000098",
  };

  const currentYear = new Date().getFullYear();
  return (
    <section
      className="question-section"
      style={{
        backgroundColor: `${EditorThemeColor[selectedTheme]}`,
        color: `${fontColor[selectedTheme]}`,
      }}
    >
      <div
        className="heading-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <span className="heating-content">{index + 1} .&nbsp;</span>
          <a className="heating-content">{questionData?.title}</a>
        </div>
        <span
          style={{ fontSize: "50px", fontWeight: "bold" }}
          className="rightInc"
          onClick={incIndex}
        >
          {" "}
          &rarr;
        </span>
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
        {questionData?.description?.map((val) => {
          return <p className="question-paragraph">{val}</p>;
        })}
      </div>
      <div className="question-examples">
        {questionData.example.map((val, index) => {
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
                {val?.explanation.trim().length != 0 && (
                  <div className="question-explaination">
                    <span>Explaination: </span>
                    <a> {val.explanation}</a>
                  </div>
                )}
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
        <footer className="question-footer">
          <p>Copyright &copy; {currentYear} CodeColab. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Question;
