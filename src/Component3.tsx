import { useEffect, useState } from "react";

export default function Component3() {
  const [colour, setColour] = useState("");

  function getRandomColour(): string {
    const letters: string = "0123456789ABCDEF";
    let color: string = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  useEffect(function () {
    setColour(getRandomColour());
  }, []);
  return (
    <div className="container">
      <div className="guess-me" style={{ background: colour }}></div>
    </div>
  );
}
