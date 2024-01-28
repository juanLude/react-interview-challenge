import { useEffect, useRef, useState } from "react";
import "./Component6.css";
import { states } from "./states";

export default function Component6() {
  const [isDropdownDisplayed, setIsDropdonwDisplayed] = useState(false);
  const [selectedStates, setSelectedStates] = useState<Record<string, boolean>>(
    states.reduce((obj, state) => ({ ...obj, [state.abbreviation]: false }), {})
  );
  const statesSelected = Object.values(selectedStates).filter(Boolean).length;
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   const onClick = (e: any) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
  //       setIsDropdonwDisplayed(false);
  //     }
  //   };
  //   document.addEventListener("click", onClick);
  //   return () => {
  //     document.removeEventListener("click", onClick);
  //   };
  // }, []);
  // console.log(isDropdownDisplayed);
  return (
    <fieldset className="dropdown">
      <button onClick={() => setIsDropdonwDisplayed((prevState) => !prevState)}>
        {statesSelected > 0
          ? `${statesSelected} selected`
          : "-- Select your states --"}
      </button>
      {isDropdownDisplayed && (
        <div
          onClick={(e) => e.stopPropagation()}
          ref={dropdownRef}
          className="panel"
        >
          {states.map((state) => (
            <fieldset
              key={state.abbreviation}
              className={selectedStates[state.abbreviation] ? "selected" : ""}
            >
              <input
                onChange={(e) =>
                  setSelectedStates({
                    ...selectedStates,
                    [state.abbreviation]: e.target.checked,
                  })
                }
                checked={selectedStates[state.abbreviation]}
                type="checkbox"
                id={`input-${state.abbreviation}`}
              />
              <label htmlFor={`input-${state.abbreviation}`}>
                {state.name}
              </label>
            </fieldset>
          ))}
        </div>
      )}
    </fieldset>
  );
}
