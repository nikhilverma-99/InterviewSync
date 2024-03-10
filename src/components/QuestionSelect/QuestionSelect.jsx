import React, { useState, useEffect } from "react";
import "./QuestionSelect.css";

import socket from "../../socket";
import { useSearchParams, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { error, success } from "../utils/toast";
import Logo from "../../images/LightLogo.svg";
import * as api from "../../Axios";
const QuestionRow = ({
  questionData,
  selectedQuestions,
  setSelectedQuestions,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const questionId = questionData?._id;

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
          error("You can select up to 4 questions.");
        }
      }
    } else {
      // Remove the question from selectedQuestions
      setSelectedQuestions((prevSelected) =>
        prevSelected.filter((id) => id !== questionId)
      );
      setIsChecked(false);
    }
    console.log(selectedQuestions);
  };

  return (
    <div className="question-row">
      <div className="questionPtick">
        <input
          type="checkbox"
          id={questionData?._id}
          name="vehicle1"
          value="Bike"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div>{questionData?.title}</div>
      </div>
      <div
        className="difficulty-tag"
        id={questionData?.difficulty.toLowerCase()}
      >
        {questionData?.difficulty}
      </div>
    </div>
  );
};
const QuestionSelect = () => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [allQuestion, setAllQuestion] = useState([]);
  const params = useSearchParams();
  const navigate = useNavigate();
  const handleStartInterview = async () => {
    try {
      if (selectedQuestions.length >= 1 && selectedQuestions.length <= 4) {
        const saveInterviewProblems = await api.saveInterviewProblems(
          params[0].get("_id"),
          selectedQuestions
        );
        console.log(saveInterviewProblems);
        // localStorage.setItem("roomID",res.data)
        const room = localStorage.getItem("roomID");
        console.log(room);

        socket.emit("interview-started", room);
        success(`Inteview Problems Created reirecting to room !`);
        navigate(`/problemEditor/I?_id=${params[0].get("_id")}}`);
      } else {
        error("Please select questions !");
      }
      console.log(selectedQuestions);
    } catch (error) {
      error(error);
    }
  };

  // const id = useSearchParams()[0].get("_id");

  useEffect(() => {
    const fetchAllProblems = async () => {
      const allProblems = await api.getAllProblem();
      console.log(allProblems);
      setAllQuestion(allProblems?.data);
      //difficulty _id  title
    };
    fetchAllProblems();
  }, []);
  return (
    <>
      <header className="questionSelect-header">
        <NavLink to="/">
          <figure>
            <img src={Logo} alt="logo" style={{ height: "5.1rem" }} />
          </figure>
        </NavLink>
        <div className="divstartInterviewBtn" onClick={handleStartInterview}>
          <div className="startInterviewBtn">
            <span>Start Interview</span>
          </div>
        </div>
      </header>
      <div className="row questionSelect">
        <div class="question-panel">
          <div class="question-bar">
            <div className="questionSearch">
              <label>Question:</label>
              <input
                class="search-bar"
                type="text"
                placeholder="Search Question"
              />
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
          {allQuestion.map((question, index) => (
            <QuestionRow
              key={index}
              questionData={question}
              selectedQuestions={selectedQuestions}
              setSelectedQuestions={setSelectedQuestions}
            />
          ))}
        </div>
        <div>
          <iframe
            style={{ height: "100%", width: `calc(100vw - 85rem)` }}
            src={atob(params[0].get("resumeUrl"))}
          />
        </div>
      </div>
    </>
  );
};

export default QuestionSelect;
