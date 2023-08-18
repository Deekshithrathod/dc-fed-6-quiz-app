import Option, { IOption } from "./Option/Option";
import "./Options.css";

const Options = ({ options }: { options: IOption[] }) => {
  return (
    <div className="options">
      {options.map((op) => (
        <Option {...op} />
      ))}
    </div>
  );
};
export default Options;
