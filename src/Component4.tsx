import { useState } from "react";

export default function Component4() {
  type TPoint = {
    x: number;
    y: number;
  };
  const [points, setPoints] = useState<TPoint[]>([]);
  const [popped, setPopped] = useState<TPoint[]>([]);

  function handlePlaceCircle(e: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = e;
    console.log(clientX, clientY);
    if (clientX >= 624 && clientY >= 509) {
      setPoints([
        ...points,
        {
          x: clientX,
          y: clientY,
        },
      ]);
    }
  }
  function handleUndo() {
    const newPoints = [...points];
    const poppedPoint = newPoints.pop();
    if (poppedPoint !== undefined) {
      setPopped([...popped, poppedPoint]);
      setPoints(newPoints);
    }
  }
  function handleRedo() {
    const newPopped = [...popped];
    const poppedPoint = newPopped.pop();
    if (!poppedPoint) return;
    setPoints([...points, poppedPoint]);
    setPopped(newPopped);
  }
  return (
    <>
      <button
        style={{
          color: "white",
          background: "#04AA6D",
          position: "relative",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 10,
        }}
        onClick={handleUndo}
      >
        Undo
      </button>
      <button
        style={{
          color: "white",
          background: "#04AA6D",
          position: "relative",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 10,
        }}
        onClick={handleRedo}
      >
        Redo
      </button>
      <div
        style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
        onClick={handlePlaceCircle}
      >
        {points.map((point, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: point.x + "px",
              top: point.y + "px",
              borderRadius: "50%",
              width: "10px",
              height: "10px",
              background: "green",
              margin: 0,
              padding: 0,
            }}
          ></div>
        ))}
      </div>
    </>
  );
}
