import { algoritmOfWordle } from "./algoritmOfWordle";

describe("wordle algoritm", () => {
  it("should return correct on first try", () => {
    const result = algoritmOfWordle("hello", "hello");
    const randomNum = Math.floor(Math.random() * 4 + 1);

    expect(result[randomNum].result).toEqual("Correct");
  });

  it("should say first character is correct placed but all other characters are incorrect", () => {
    const result = algoritmOfWordle("hwwww", "hello");
    const randomNum = Math.floor(Math.random() * 4 + 1);

    expect(result[0].result).toEqual("Correct");
    expect(result[randomNum].result).toEqual("Incorrect");
  });

  it("should say misplaced when there is a character in correct word but placed wrong.", () => {
    const result = algoritmOfWordle("hwwew", "hello");
    const randomNum = Math.floor(Math.random() * 4 + 1);

    expect(result[3].result).toEqual("Misplaced");
  });

  it("should say correct / misplaced / incorrect when guessing word has more same character than original character ", () => {
    const result = algoritmOfWordle("hlalo", "heloo");

    expect(result[0].result).toEqual("Correct");
    expect(result[1].result).toEqual("Misplaced");
    expect(result[2].result).toEqual("Incorrect");
    expect(result[3].result).toEqual("Incorrect");
    expect(result[4].result).toEqual("Correct");
  });
});
