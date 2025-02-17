import { capitalize } from "./capitalize.js";

test("Capitalizes single letter", () => {
  expect(capitalize("a")).toBe("A");
});

test("Capitalizes first character in string", () => {
  expect(capitalize("apple")).toBe("Apple");
});

test("Capitalize non-letter first character in a string", () => {
  expect(capitalize("1234")).toBe("1234");
});

test("Handles empty string", () => {
  expect(capitalize("")).toBe("");
});
