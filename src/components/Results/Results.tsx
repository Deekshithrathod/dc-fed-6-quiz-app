import { useRecoilValue, useSetRecoilState } from "recoil";
import "./Results.css";
import { rightAnswersCount } from "../../atoms/userAnswers";
import { currQuestionIndex } from "../../atoms/quiz";

const Results = () => {
  const correctAnswers = useRecoilValue(rightAnswersCount);
  const setCurrQIndex = useSetRecoilState(currQuestionIndex);

  const handleClick = () => {
    setCurrQIndex(0);
  };

  return (
    <div className="results">
      <img src="results.svg" />
      <div className="results-heading">Results</div>
      <p className="results-number">
        You got <span> {correctAnswers} </span> correct answers
      </p>

      <button onClick={handleClick}>Try again</button>
    </div>
  );
};
export default Results;
