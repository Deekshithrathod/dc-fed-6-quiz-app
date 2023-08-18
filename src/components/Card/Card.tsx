import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Options from "../Options/Options";
import Question from "../Question/Question";
import Results from "../Results/Results";
import "./Card.css";
import { currQuestion, currQuestionIndex } from "../../atoms/quiz";
import { IUserAnswer, userAnswers } from "../../atoms/userAnswers";
import { useEffect } from "react";
import { asyncGetFlagURL } from "../../utils/flagUrl";

const Card = () => {
  const details = useRecoilValue(currQuestion);
  const [currQIndex, setCurrQIndex] = useRecoilState(currQuestionIndex);
  const setUserAnswers = useSetRecoilState(userAnswers);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (details === "ITS_OVER_KID") {
      return;
    }

    const target = e.target as HTMLDivElement;
    if (!target.classList.contains("option")) {
      return;
    }

    // select the current one & remove from others
    target.classList.add("selected");

    // reveal next button
    const nextBtn = document.querySelector("div.next-btn-container");

    let answerState = true;
    // reveal answers
    const options = document.querySelectorAll(".option");
    for (let option of options) {
      // check if selected from classList & details.correctAnser
      const optionVal = (option as HTMLElement).dataset.val;

      if (option.classList.contains("selected")) {
        if (optionVal !== details.correctAnswer) {
          option.classList.add("wrong");
          answerState = false;
        }
      }

      if (optionVal === details.correctAnswer) {
        option.classList.add("correct");
      }
    }

    // revealNextButton
    nextBtn?.classList.toggle("hide");

    // update the usersAnswersState
    setUserAnswers((prevAnswers) => {
      const newAnswer: IUserAnswer = {
        questionIndex: currQIndex,
        correctAnswer: details.correctAnswer,
        answered: answerState ? "right" : "wrong",
      };
      return [...prevAnswers, newAnswer];
    });
  };

  const updateQuestionIndex = () => {
    setCurrQIndex((prev) => prev + 1);
  };

  const Display = () => {
    return details === "ITS_OVER_KID" ? (
      <Results />
    ) : (
      <>
        <Question {...details} flagURL={details.correctAnswer} />
        <Options options={details.options} />
        <div className="next-btn-container hide">
          <button className="next-btn" onClick={() => updateQuestionIndex()}>
            Next
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="card-container">
      <header>
        <h1>Country Quiz</h1>
        <img src="quiz-top.svg" className="quiz-img" />
      </header>
      <div className="card" onClick={handleClick}>
        <Display />
        {/* <Question type="flag" text="Kuala Lumpur is the capital of" /> */}
        {/* <Options options={options} /> */}
        {/* <Results /> */}
      </div>
    </div>
  );
};

export default Card;
