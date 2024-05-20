import React from "react";
import Guess from "../Guess/Guess";
import BlankGuess from "../BlankGuess/BlankGuess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
function GuessResults({ guessResults, answer }) {
  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
          if (index < guessResults.length) {
            return (
              <Guess key={index} guess={guessResults[index]} answer={answer} />
            );
          } else {
            return <BlankGuess key={index} />;
          }
        })}
      </div>
    </>
  );
}

export default GuessResults;
