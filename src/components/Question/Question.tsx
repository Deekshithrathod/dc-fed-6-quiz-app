import "./Question.css";

interface IQuestion {
  type: "flag" | "plain";
  text: string;
}

const Question = ({ type, text }: IQuestion) => {
  return (
    <div className="question">
      {type === "plain" && <img src="https://flagcdn.com/w320/de.png" />}
      <h4>{text}</h4>
    </div>
  );
};
export default Question;

{
  /* <div className="question-card">
          <div className="answers">
            <div className="answer">
              <span>A</span> Vietnam
            </div>
            <div className="answer">
              <span>A</span> Vietnam
            </div>
            <div className="answer">
              <span>A</span> Vietnam
            </div>
            <div className="answer">
              <span>A</span> Vietnam
            </div>
          </div>
        </div> */
}
