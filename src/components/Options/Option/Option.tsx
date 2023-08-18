import "./Option.css";

export interface IOption {
  index: "A" | "B" | "C" | "D";
  value: string;
}

const Option = ({ index, value }: IOption) => {
  return (
    <div className="option">
      <span className="index">{index}</span>
      {value}
    </div>
  );
};
export default Option;
