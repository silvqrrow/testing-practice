import { reverseString } from "./reverse.js";

test("Reverse single character", () => {
  expect(reverseString("A")).toBe("A");
});

test("Reverse a word", () => {
  expect(reverseString("Apple")).toBe("elppA");
});

test("Reverse a sentence", () => {
  expect(reverseString("I love you")).toBe("uoy evol I");
});

test("Reverse a string with non-letters", () => {
  expect(reverseString("1342")).toBe("2431");
});
