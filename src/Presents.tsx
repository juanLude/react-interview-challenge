import { useState } from "react";
import presentImg from "./assets/present_box.png";
type Present = {
  presents: Present[];
  scale?: number;
};
export default function Presents() {
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
      {" "}
      {presents.map((_, clickedIdx) => (
        <button
          key={clickedIdx}
          onClick={() => {
            setPresents((curPresents) => {
              console.log(curPresents);
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
