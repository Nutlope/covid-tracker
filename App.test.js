import { App } from "./App.js";
import * as ReactDOM from "react-dom";

const expected = true;
const actual = false;

test("it works", () => {
  // simple jest test
  expect(actual).toBe(expected);
});

test("renders the correct content", () => {
  // render React componenent to the DOM
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  expect(root.querySelector("h1").textContent).toBe("United States Covid-19 Cases");
});
