import { useState } from "react";
import "./Component2.css";
export default function Component2() {
  const [cells, setCells] = useState(["a", "b", "c"]);
  function changeCellContent(newCellValue: string, indexToUpdate: number) {
    setCells((prevCells) =>
      prevCells.map((cell, idx) =>
        idx === indexToUpdate ? newCellValue : cell
      )
    );
  }
  function handlePlusClick(index: number) {
    setCells((prevCells) => [
      ...prevCells.slice(0, index + 1),
      "_",
      ...prevCells.slice(index + 1),
    ]);
  }
  const joinedCells = cells.join("");
  return (
    <>
      <div>Component2</div>
      <main>
        {cells.map((cell, index) => (
          <div key={index} className="cell">
            <input
              onChange={(e) => changeCellContent(e.currentTarget.value, index)}
              value={cell}
              type="text"
            ></input>
            {index < cells.length - 1 && (
              <span
                className="plus"
                onClick={() => handlePlusClick(index)}
              ></span>
            )}
          </div>
        ))}
      </main>
      <div style={{ margin: "10px" }}>{joinedCells}</div>
    </>
  );
}
