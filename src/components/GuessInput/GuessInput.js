import React from "react";

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess });
        addGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input"> Enter Guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        maxLength={5}
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
