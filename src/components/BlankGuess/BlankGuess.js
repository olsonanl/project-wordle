import React from "react";
import { range } from "../../utils";

function BlankGuess() {
  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <span key={num} className="cell">
            {" "}
          </span>
        );
      })}
    </p>
  );
}

export default BlankGuess;
