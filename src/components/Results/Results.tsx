import "./Results.css";

const Results = () => {
  return (
    <div className="results">
      <img src="results.svg" alt="" />
      <div className="results-heading">Results</div>
      <p className="results-number">
        You got <span> 4 </span> correct answers
      </p>

      <button>Try again</button>
    </div>
  );
};
export default Results;
