import { useEffect, useState } from "react";

function getRandomColour(): string {
  const letters: string = "0123456789ABCDEF";
  let color: string = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function Component3() {
  const [colour, setColour] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<boolean | undefined>(undefined);

  useEffect(function () {
    const actualColor = getRandomColour();
    setColour(actualColor);
    setAnswers(
      [actualColor, getRandomColour(), getRandomColour()].sort(
        () => Math.random() - 0.5
      )
    );
  }, []);
  function handleAnswerClick(answer: string) {
    if (answer === colour) {
      setResult(true);
    } else {
      setResult(false);
    }
  }
  return (
    <div className="container">
      <div className="guess-me" style={{ background: colour }}></div>
      <div>
        {answers.map((answer) => (
          <button
            onClick={() => handleAnswerClick(answer)}
            style={{
              background: "gray",
              border: "solid",
              margin: "4px",
              padding: "2px",
              color: "white",
            }}
            key={answer}
          >
            {answer}
          </button>
        ))}
      </div>
      {result === true && <div style={{ color: "green" }}>Right Answer!</div>}
      {result === false && <div style={{ color: "red" }}>Wrong Answer</div>}
    </div>
  );
}
