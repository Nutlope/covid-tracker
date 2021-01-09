import "./App.js";

const expected = true;
const actual = false;

test("it works", () => {
  expect(actual).toBe(expected);
});
