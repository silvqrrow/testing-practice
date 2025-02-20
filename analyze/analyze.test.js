import { analyzeArray } from "./analyze";

test("analyzes an array correctly", () => {
  const input = analyzeArray([1, 8, 3, 4, 2, 6]);
  const expectedResult = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(input).toEqual(expectedResult);
});
