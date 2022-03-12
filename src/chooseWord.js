export const chooseWord = (input) => {
  let filteredWordList = [];

  input.words
    //filter the length first
    .filter((item) => item.length === input.numberOfWord)
    .forEach((word) => {
      let isDuplicated = false;
      //check if there is a same character behind the word[i]
      for (let i = 0; i < input.numberOfWord; i++) {
        if (word.slice(i + 1).includes(word[i])) {
          i = input.numberOfWord;
          isDuplicated = true;
        }
      }
      if (
        (isDuplicated && input.indication === "duplicated") ||
        (!isDuplicated && input.indication !== "duplicated")
      ) {
        filteredWordList.push(word);
      }
    });

  let output =
    filteredWordList.length === 0
      ? `There is no matching word for it`
      : filteredWordList[
          Math.floor(Math.random() * (filteredWordList.length - 1))
        ];
  return output;
};
