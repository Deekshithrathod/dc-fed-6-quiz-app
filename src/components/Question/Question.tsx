import { useEffect, useState } from "react";
import "./Question.css";
import { asyncGetFlagURL } from "../../utils/flagUrl";

export interface IQuestion {
  type: "flag" | "plain";
  question: string;
  flagURL?: string;
}

const Question = ({ type, question, flagURL }: IQuestion) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    (async () => {
      const u = await asyncGetFlagURL(flagURL || "Germarny");
      setUrl(u);
    })();
  }, []);

  return (
    <>
      {type === "flag" && (
        <div className="flag-container">
          {url ? <img src={url} className="flag-img" /> : "..."}
        </div>
      )}
      <h4>{question}</h4>
    </>
  );
};
export default Question;
