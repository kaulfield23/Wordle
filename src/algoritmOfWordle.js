export const algoritmOfWordle = (inputGuessingWord, inputCorrectWord) => {
  let guessingWord = inputGuessingWord.toUpperCase().split("");
  let correctWord = inputCorrectWord.toUpperCase().split("");
  let result = [];

  //when every char is correct
  if (guessingWord.join("") === correctWord.join("")) {
    guessingWord.forEach((char) =>
      result.push({ letter: char, result: "Correct" })
    );
    return result;
  } else {
    guessingWord.forEach((char, index) => {
      let charIsAtCorrectPosition = char === correctWord[index];
      let charExists = correctWord.includes(char);

      if (charExists && charIsAtCorrectPosition) {
        result.push({ letter: char, result: "Correct" });
      } else if (charExists && !charIsAtCorrectPosition) {
        result.push({ letter: char, result: "Misplaced" });
      } else {
        result.push({ letter: char, result: "Incorrect" });
      }
    });
  }

  guessingWord
    .filter((item, idx, array) => array.indexOf(item) === idx)
    .forEach((character) => {
      const multiCharInGuess = guessingWord.filter(
        (char) => char === character
      ).length;
      const multiCharInCorrect = correctWord.filter(
        (char) => char === character
      ).length;

      if (multiCharInGuess > multiCharInCorrect && multiCharInGuess >= 2) {
        let remove = multiCharInGuess - multiCharInCorrect;
        result
          .filter(
            (item) => item.letter === character && item.result === "Misplaced"
          )
          .reverse()
          .forEach((item) => {
            if (remove > 0) {
              item.result = "Incorrect";
            }
            remove--;
          });
      } else if (multiCharInGuess > multiCharInCorrect) {
        result.forEach((item) => {
          if (item.letter === character && item.result === "Misplaced") {
            item.result = "Incorrect";
          }
        });
      }
    });

  return result;
};

console.log(algoritmOfWordle("Halaa", "Cykla"));
// //인,인,미,인,코
console.log(algoritmOfWordle("Halaa", "Cylla"));
// //인,인,코,인,코
console.log(algoritmOfWordle("Llloo", "hllll"));
// //미코코인인
console.log(algoritmOfWordle("hallå", "haåll"));
//코코미코미;
console.log(algoritmOfWordle("hlalo", "heloo"));
//코미인인코
console.log(algoritmOfWordle("llalll", "helolo"));
//미인인인코인
console.log(algoritmOfWordle("Hallå", "cykla"));
//인미인코인
