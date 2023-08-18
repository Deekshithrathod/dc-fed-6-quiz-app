import { IOption } from "../Options/Option/Option";
import Options from "../Options/Options";
import Question from "../Question/Question";
import Results from "../Results/Results";
import "./Card.css";

const Card = () => {
  const options: IOption[] = [
    { index: "A", value: "Germany" },
    { index: "B", value: "Holland" },
    { index: "C", value: "Poland" },
    { index: "D", value: "Japan" },
  ];
  return (
    <div className="card-container">
      <header>
        <h1>Country Quiz</h1>
        <img src="undraw_adventure_4hum 1.svg" className="quiz-img" />
      </header>
      <div className="card">
        {/* <Question type="flag" text="Kuala Lumpur is the capital of" /> */}
        {/* <Options options={options} /> */}
        <Results />
      </div>
    </div>
  );
};

export default Card;
