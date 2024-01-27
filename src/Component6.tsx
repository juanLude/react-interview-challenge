import { useState } from "react";
import "./Component6.css";
import { states } from "./states";

export default function Component6() {
  const [isDropdownDisplayed, setIsDropdonwDisplayed] = useState(true);
  const [selectedStates, setSelectedStates] = useState({});
  return (
    <fieldset className="dropdown">
      <button onClick={() => setIsDropdonwDisplayed((prevState) => !prevState)}>
        -- Select your states --
      </button>
      {isDropdownDisplayed && (
        <div className="panel">
          {states.map((state) => (
            <fieldset>
              <input
                type="checkbox"
                id={`input-${state.abbreviation}`}
                key={state.abbreviation}
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
