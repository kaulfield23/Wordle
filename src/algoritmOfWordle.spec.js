import { verifyWord } from "./algoritmOfWordle";

describe("wordle algoritm", () => {
  it("should return correct on first try", () => {
    const result = verifyWord("hello", "hello");
    const randomNum = Math.floor(Math.random() * 4 + 1);

    expect(result[randomNum].result).toEqual("Correct");
  });

  it("should say first character is correct placed but all other characters are incorrect", () => {
    const result = verifyWord("hwwww", "hello");
    const randomNum = Math.floor(Math.random() * 4 + 1);

    expect(result[0].result).toEqual("Correct");
    expect(result[randomNum].result).toEqual("Incorrect");
  });

  it("should say misplaced when there is a character in correct word but placed wrong.", () => {
    const result = verifyWord("hwwew", "hello");
    const randomNum = Math.floor(Math.random() * 4 + 1);

    expect(result[3].result).toEqual("Misplaced");
  });

  it("should say correct / misplaced / incorrect when guessing word has more same character than original character ", () => {
    const result = verifyWord("hlalo", "heloo");

    expect(result[0].result).toEqual("Correct");
    expect(result[1].result).toEqual("Misplaced");
    expect(result[2].result).toEqual("Incorrect");
    expect(result[3].result).toEqual("Incorrect");
    expect(result[4].result).toEqual("Correct");
  });

  it("Checking case 1 ", () => {
    const result = verifyWord("Halaa", "Cykla");

    expect(result[0].result).toEqual("Incorrect");
    expect(result[1].result).toEqual("Incorrect");
    expect(result[2].result).toEqual("Misplaced");
    expect(result[3].result).toEqual("Incorrect");
    expect(result[4].result).toEqual("Correct");
  });
  it("Checking case 2 ", () => {
    const result = verifyWord("Halaa", "Cylla");

    expect(result[0].result).toEqual("Incorrect");
    expect(result[1].result).toEqual("Incorrect");
    expect(result[2].result).toEqual("Correct");
    expect(result[3].result).toEqual("Incorrect");
    expect(result[4].result).toEqual("Correct");
  });
  it("Checking case 3 ", () => {
    const result = verifyWord("Llloo", "hllll");

    expect(result[0].result).toEqual("Misplaced");
    expect(result[1].result).toEqual("Correct");
    expect(result[2].result).toEqual("Correct");
    expect(result[3].result).toEqual("Incorrect");
    expect(result[4].result).toEqual("Incorrect");
  });
  it("Checking case 4", () => {
    const result = verifyWord("Hallå", "haåll");

    expect(result[0].result).toEqual("Correct");
    expect(result[1].result).toEqual("Correct");
    expect(result[2].result).toEqual("Misplaced");
    expect(result[3].result).toEqual("Correct");
    expect(result[4].result).toEqual("Misplaced");
  });
  it("Checking case 5 ", () => {
    const result = verifyWord("hlalo", "heloo");

    expect(result[0].result).toEqual("Correct");
    expect(result[1].result).toEqual("Misplaced");
    expect(result[2].result).toEqual("Incorrect");
    expect(result[3].result).toEqual("Incorrect");
    expect(result[4].result).toEqual("Correct");
  });

  it("Checking case 6 ", () => {
    const result = verifyWord("hallå", "cykla");

    expect(result[0].result).toEqual("Incorrect");
    expect(result[1].result).toEqual("Misplaced");
    expect(result[2].result).toEqual("Incorrect");
    expect(result[3].result).toEqual("Correct");
    expect(result[4].result).toEqual("Incorrect");
  });
});
