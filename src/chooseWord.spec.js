import { chooseWord } from "./chooseWord.js";

describe("wordle algoritm", () => {
  it("should return the word that the length is same as numberOfWord", () => {
    let input = {
      words: ["hello", "world", "meh"],
      numberOfWord: 5,
    };
    const result = chooseWord(input);

    expect(result.length).toEqual(input.numberOfWord);
  });

  it("should return word that has duplicated characters that length is 5", () => {
    let input = {
      words: ["hello", "world", "meh"],
      numberOfWord: 5,
      indication: "duplicated",
    };
    const result = chooseWord(input);

    expect(result).toEqual("hello");
  });
  it("should return random word that has duplicated characters that length is 5", () => {
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
      indication: "duplicated",
    };

    let duplicatedWord = ["hello", "sorry", "sleep", "pizza", "hatch"];
    const result = chooseWord(input);

    expect(duplicatedWord.includes(result)).toEqual(true);
  });

  it("should return word that has not duplicated characters that length is 5", () => {
    let input = {
      words: ["hello", "world", "meh"],
      numberOfWord: 5,
      indication: "not duplicated",
    };
    const result = chooseWord(input);

    expect(result).toEqual("world");
  });

  it("should return random word that has not duplicated characters that length is 5", () => {
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

    let noDuplicatedWord = ["maybe", "tired", "water", "drink"];
    const result = chooseWord(input);

    expect(noDuplicatedWord.includes(result)).toEqual(true);
  });
});
