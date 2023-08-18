import Option, { index } from "./Option/Option";
import "./Options.css";

const Options = ({ options }: { options: string[] }) => {
  const getIndex = (num: number): index => {
    let retVal: index;
    switch (num) {
      case 1:
        retVal = "A";
        break;
      case 2:
        retVal = "B";
        break;
      case 3:
        retVal = "C";
        break;
      case 4:
        retVal = "D";
        break;

      default:
        retVal = "A";
        break;
    }
    return retVal;
  };
  return (
    <div className="options">
      {options.map((op, index) => (
        <Option value={op} index={getIndex(index)} />
      ))}
    </div>
  );
};
export default Options;
