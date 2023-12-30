import React from "react";
import './Question.css'
const Question = () => {
    const currentYear = new Date().getFullYear();
  return (
        <section className="question-section">
            <div className="heading-container">
                <a className="heating-content">1897. Redistribute Characters to Make All Strings Equal</a>
            </div>
            <div className="tags">
                <div className="tag-content">
                    <a className="tag" style={{ color: '#3eff00' , background:'#5de92f73'}}>Easy</a> 
                </div>
            </div>
            <div className="question-description">
                <p className="question-paragraph">
                You are given an array of strings words (0-indexed).
                </p>
                <p className="question-paragraph">
                In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].
                </p>
                <p className="question-paragraph">
                Return true if you can make every string in words equal using any number of operations, and false otherwise.
                </p>
            </div>
            <div className="question-examples">
                <div className="question-example">
                        <p className="example">Example 1: </p>
                    <div className="example-content">
                        <div className="question-input">
                            <span>Input: </span>
                            <a>words = ["abc","aabc","bc"]</a>
                        </div>
                        <div className="question-output">
                            <span>Output: </span>
                            <a>true</a>
                        </div>
                        <div className="question-explaination">
                            <span>Explaination: </span>
                            <a>Move the first 'a' in words[1] to the front of words[2],to make words[1] = "abc" and words[2] = "abc". All the strings are now equal to "abc", so return true.</a>
                        </div> 
                    </div> 
                </div>
                <div className="question-example">
                        <p className="example">Example 2: </p>
                    <div className="example-content">
                        <div className="question-input">
                            <span>Input: </span>
                            <a>words = ["ab","a"]</a>
                        </div>
                        <div className="question-output">
                            <span>Output: </span>
                            <a>false</a>
                        </div>
                        <div className="question-explaination">
                            <span>Explaination: </span>
                            <a> It is impossible to make all the strings equal using the operation.</a>
                        </div> 
                    </div> 
                </div>
            </div>
            <div className="question-constraints">
                <span className="constraint-heading">Constraints:</span>
                <ul className="contraints-list">
                    <li>1 &lt;= words.length &lt;= 100</li>
                    <li>1 &lt;= words[i].length &lt;= 100</li>
                    <li>words[i] consists of lowercase English letters.</li> 
                </ul>
            <footer className="question-footer">
                <p>Copyright &copy; {currentYear} CodeColab. All rights reserved.</p>
            </footer>
            </div>
        </section>)
};

export default Question; 

