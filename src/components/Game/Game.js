import React from "react";

import GuessResults from "../GuessResults/GuessResults";
import GuessInput from "../GuessInput/GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState(["FRIST"]);

  function addGuess(guess) {
    if (guessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      window.alert("too many guesses!");
      return;
    }
    const ng = [...guessResults, guess];
    setGuessResults(ng);

    if (guess === answer) {
    }
  }
  const success =
    guessResults.length > 0 && guessResults.slice(-1)[0] === answer;
  const failure = !success && guessResults.length === NUM_OF_GUESSES_ALLOWED;
  console.log(success, failure);
  return (
    <>
      <GuessResults answer={answer} guessResults={guessResults}></GuessResults>
      <GuessInput addGuess={addGuess}></GuessInput>
      {success && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guessResults.length} guesses</strong>.
          </p>
        </div>
      )}
      {failure && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
