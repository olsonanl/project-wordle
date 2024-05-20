import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  console.log({ guess, answer });
  return (
    <p className="guess">
      {checkGuess(guess, answer).map((stat, index) => {
        const c = stat.letter;
        const s = stat.status;
        return (
          <span key={index} className={`cell ${s}`}>
            {c}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
