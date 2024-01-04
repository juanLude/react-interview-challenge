import { useState } from "react";
import "./Component2.css";
export default function Component2() {
  const [cells, setCells] = useState(["a", "b", "c"]);

  return (
    <>
      <div>Component2</div>
      <main>
        {cells.map((cell, index) => (
          <div key={index} className="cell">
            {cell}
          </div>
        ))}
      </main>
    </>
  );
}
