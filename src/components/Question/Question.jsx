import React from "react";
import './Question.css'
import { useCodeCollabContext } from "../../App";
const Question = (props) => {
    const {selectedTheme,setSelectedTheme} = useCodeCollabContext();
    const EditorThemeColor ={
        'vs-dark': '#2f2f2f',
        'vs-light': '#002eb8',
        'monokai': '#272822',
        'cobalt':'#01111f', 
      }
      const questionData=props.questionData;
      if (!questionData) {
        return null; // or some placeholder content
    }

    const difficultyText={
        'Easy':'#3eff00',
        'Medium':'#ffcc00',
        'Hard':'#ff0000'
    }
    const difficultyBackground={
        'Easy':'#5de92f73',
        'Medium':'#ffcc0099',
        'Hard':'#ff000098'
    }
    const currentYear = new Date().getFullYear();
  return (
        <section className="question-section" style={{backgroundColor:`${EditorThemeColor[selectedTheme]}`}}>
            <div className="heading-container">
                <a className="heating-content">{questionData?.question}</a>
            </div>
            <div className="tags">
                <div className="tag-content">
                    <a className="tag" style={{ color: `${difficultyText[questionData.difficulty]}` , background: `${difficultyBackground[questionData.difficulty]}`}}>{questionData.difficulty}</a> 
                </div>
            </div>
            <div className="question-description">
                {
                    questionData.questionDescription.map((val)=>{
                        return  <p className="question-paragraph">
                         {val}
                        </p>
                    })
                }
                
            </div>
            <div className="question-examples">
                {
                    questionData.examples.map((val,index)=>{  
                        return <div className="question-example">
                                <p className="example">Example {index+1}: </p>
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
                    })
                } 
            </div>
            <div className="question-constraints">
                <span className="constraint-heading">Constraints:</span>
                <ul className="contraints-list">
                    {
                        questionData.constraints.map((val,index)=>{
                          return  <li>{val}</li> 
                        })
                    }
                  
                </ul>
            <footer className="question-footer">
                <p>Copyright &copy; {currentYear} CodeColab. All rights reserved.</p>
            </footer>
            </div>
        </section>)
};

export default Question; 

