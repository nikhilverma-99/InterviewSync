import React,{useState} from "react";
import './QuestionSelect.css'
 
import { NavLink } from "react-router-dom";
import {error} from '../utils/toast'
import Logo from '../../images/LightLogo.svg'
 
const QuestionRow = ({ questionData, selectedQuestions, setSelectedQuestions }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const questionId = questionData?.id;

    if (!isChecked) {
      // Check if the question is already selected
      if (!selectedQuestions.includes(questionId)) {
        // Check if the limit is reached
        if (selectedQuestions.length < 4) {
          // Add the question to selectedQuestions
          setSelectedQuestions((prevSelected) => [...prevSelected, questionId]);
          setIsChecked(true);
        } else {
          // Display an alert if the limit is exceeded
          error('You can select up to 4 questions.');
        }
      }
    } else {
      // Remove the question from selectedQuestions
      setSelectedQuestions((prevSelected) => prevSelected.filter(id => id !== questionId));
      setIsChecked(false);
    }
  };

  return (
    <div className="question-row">
      <div className="questionPtick">
        <input
          type="checkbox"
          id={questionData?.id}
          name="vehicle1"
          value="Bike"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div>{questionData.description}</div>
      </div>
      <div className='difficulty-tag' id={questionData.tag.toLowerCase()}>{questionData.tag}</div>
    </div>
  );
};
const QuestionSelect = () => {

  const [selectedQuestions, setSelectedQuestions] =useState([])
  const addSelectedQuestions = ()=>{ 
  console.log(selectedQuestions);
  
  }
  const dummyQuestionData = [
    { id: "q1a2b3c4", description: "Implement a function to find the sum of two numbers in JavaScript.", tag: "easy" },
    { id: "q5x6y7z8", description: "Explain the life cycle methods in React.", tag: "medium" },
    { id: "q9p0o1i2", description: "Write a basic Redux reducer for managing a counter state.", tag: "medium" },
    { id: "q7u8i9o0", description: "Implement a function to reverse a linked list in JavaScript.", tag: "hard" },
    { id: "q6t7y8u9", description: "How to use hooks in React?", tag: "easy" },
    { id: "q5t4r3e2", description: "Difference between state and props in React?", tag: "medium" },
    { id: "q1o2p3i4", description: "Explain the concept of asynchronous programming.", tag: "hard" },
  ]; 

  return <>
    <header className='paymentSuccessfull-header'>
      <NavLink to='/'>
        <figure>
          <img src= {Logo} alt="logo" style={{ height: '5.1rem' }} />
        </figure> 
      </NavLink>
    </header>  
    <div class="question-panel"> 
      <div class="question-bar">
        
        <div className="questionSearch">
          <label>Question:</label>
          <input class="search-bar" type="text" placeholder="Search Question"/>
          </div>

        <div className="questionSearch"> 
          <label for="difficulty">Select Difficulty:</label>
          <select class="form-select select-difficulty" id="difficulty">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
          </select>
        </div>
        
        <div className="questionSearch">
          
          <label for="difficulty">Tags:</label>
        <select class="form-select select-difficulty" id="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
        </div>
      </div> 
          {
          dummyQuestionData.map((question, index) => (
            <QuestionRow
              key={index}
              questionData={question}
              selectedQuestions={selectedQuestions}
              setSelectedQuestions={setSelectedQuestions}
            />
          ))
          }    
      </div>
    <div>


          <button onClick={addSelectedQuestions}>COnduct Interview</button>  
   </div>
   
  </> 
};

export default QuestionSelect;
