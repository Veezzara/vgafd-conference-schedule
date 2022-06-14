import html2canvas from "html2canvas";
import { useRef, useState } from "react";
import "./bingo.css";

type Props = {
  bingoOptions: string[];
};

export default function Bingo(props: Props) {
  const [selected, setSelected] = useState<number[]>([]);
  const bingoRef = useRef<HTMLDivElement>(null);

  function toggle(index: number) {
    if (selected.includes(index)) {
      const copy = Object.assign([], selected);
      const e = copy.indexOf(index);
      copy.splice(e, 1);
      setSelected(copy);
    } else {
      const copy = Object.assign([], selected);
      copy.push(index);
      setSelected(copy);
    }
  }

  function getModifier(index: number) {
    return selected.includes(index) ? "selected" : "";
  }

  function saveBingo() {
    var element = document.getElementById("bingo-container");
    const bingo = bingoRef.current;

    if (!bingo) return;

    html2canvas(bingo)
      .then(function (canvas) {
        canvas.style.display = "none";
        document.body.appendChild(canvas);
        return canvas;
      })
      .then((canvas) => {
        const image = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        const a = document.createElement("a");
        a.setAttribute("download", "bingo.png");
        a.setAttribute("href", image);
        a.click();
        canvas.remove();
      });
  }

  return (
    <>
      <div className="bingo-container" ref={bingoRef}>
        <div className="bingo">
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
      </div>
      <div className="button-container">
        <div onClick={saveBingo} className="download-button">
          Скачать бинго
        </div>
      </div>
    </>
  );
}
