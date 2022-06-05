import { useState } from "react";
import "./bingo.css";

type Props = {
  bingoOptions: string[];
};

export default function Bingo(props: Props) {
  const [selected, setSelected] = useState<number[]>([]);

  function toggle(index: number) {
    if (selected.includes(index)) {
      const copy = Object.assign([], selected)
      const e = copy.indexOf(index);
      copy.splice(e, 1);
      setSelected(copy)
    } else {
      const copy = Object.assign([], selected)
      copy.push(index);
      setSelected(copy)
    }
  }

  function getModifier(index: number) {
    return selected.includes(index) ? "selected" : "";
  }

  return (
    <div className="bingo-container">
      {props.bingoOptions.map((option, index) => {
        return (
          <div
            className={`bingo-option ${getModifier(index)}`}
            key={index}
            onClick={() => toggle(index)}
          >
            {option}
          </div>
        );
      })}
    </div>
  );
}
