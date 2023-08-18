import "./Option.css";

export type index = "A" | "B" | "C" | "D";
export interface IOption {
  index: index;
  value: string;
}

const Option = ({ index, value }: IOption) => {
  return (
    <div className="option" data-val={value}>
      <span className="index">{index}</span>
      {value}
    </div>
  );
};
export default Option;
