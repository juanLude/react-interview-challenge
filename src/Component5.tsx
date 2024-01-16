import { useState } from "react";
import "./App.css";
export default function Component5() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const validPassword = "4176";
  const [clickedNumbers, setClickedNumbers] = useState<string[]>([]);
  const [result, setResult] = useState<string>("");

  function handleClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    if (clickedNumbers.length < 4) {
      const clickedNumber = (e.target as HTMLButtonElement).innerText;

      setClickedNumbers((prev) => {
        const newClickedNumbers = [...prev, clickedNumber];

        if (newClickedNumbers.length === 4) {
          const enteredPassword = newClickedNumbers.join("");

          if (enteredPassword === validPassword) {
            console.log("valid");
            setResult("valid");
          } else {
            console.log("invalid");
            setResult("invalid");
          }
        }

        return newClickedNumbers;
      });
    }
  }
  return (
    <>
      <div className="box">
        {numbers.map((num, idx) => (
          <button onClick={handleClick} key={idx}>
            {num}
          </button>
        ))}
        <div>{result}</div>
      </div>
    </>
  );
}
