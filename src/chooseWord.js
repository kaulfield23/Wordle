export const chooseWord = (input) => {
  let filteredWordList = [];

  input.words
    .filter((item) => {
      if (item.length !== input.numberOfWord) {
        console.log(
          `Word ${item} has not same length as ${input.numberOfWord}`
        );
        return false;
      } else {
        return true;
      }
    })
    .forEach((word) => {
      let checkDuplicated = false;
      for (let i = 0; i < input.numberOfWord; i++) {
        if (word.slice(i + 1).includes(word[i])) {
          i = input.numberOfWord;
          checkDuplicated = true;
        }
      }
      if (
        (checkDuplicated && input.indication === "duplicated") ||
        (!checkDuplicated && input.indication !== "duplicated")
      ) {
        filteredWordList.push(word);
      } else {
        console.log(`Word ${word} is has no ${input.indication} character`);
      }
    });

  let randomOutput =
    filteredWordList[Math.floor(Math.random() * (filteredWordList.length - 1))];

  return randomOutput;
};

let input = {
  words: [
    "hello",
    "hamburger",
    "maybe",
    "sorry",
    "wordle",
    "difficult",
    "easy",
    "sleep",
    "tired",
    "water",
    "drink",
    "pho",
    "hi",
    "pizza",
    "hatch",
  ],
  numberOfWord: 5,
  indication: "not duplicated",
};
console.log(chooseWord(input));
