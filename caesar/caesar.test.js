import { caesarCipher } from "./caesar";

test("shift normal word", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("puncutation, spaces, and other non-alpha characters", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
