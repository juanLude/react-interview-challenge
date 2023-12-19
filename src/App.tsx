import { useState } from "react";
import "./App.css";
import presentImg from "./assets/present_box.png";

type Present = {
  presents: Present[];
  scale?: number;
};

function App() {
  const [presents, setPresents] = useState<Present[]>([
    {
      presents: [
        {
          presents: [
            {
              presents: [],
            },
          ],
        },
        {
          presents: [],
        },
      ],
    },
    { presents: [] },
    { presents: [] },
    { presents: [] },
  ]);

  return (
    <>
      {presents.map((present, clickedIdx) => (
        <button
          onClick={() => {
            setPresents((curPresents) => {
              return curPresents.flatMap((value, index) => {
                return index === clickedIdx ? value.presents : value;
              });
            });
          }}
        >
          <img src={presentImg} key={clickedIdx} />
        </button>
      ))}
    </>
  );
}
export default App;
