import App from "../src/App.js";
import { within, fireEvent } from "@testing-library/react";
import ReactDOM from "react-dom";

// DOESN'T WORK WITH RENDER FROM RTL - why?
const render = (component) => {
  const root = document.createElement("div");
  ReactDOM.render(component, root);
  return within(root);
};

// I want to be able to test after the API has loaded data as well (async?) How?

test("renders the correct content", () => {
  // render React componenent to the DOM
  const { getByText } = render(<App />);
  getByText("Loading...");

  // ANOTHER WAY TO DO IT
  // const root = document.createElement("div");
  // ReactDOM.render(<App />, root);
  // const { getByText } = within(root);

  // ALTERNATE METHODS
  // expect(root.querySelector("h1").textContent).toBe("Just testing fam");
  // expect(getByText("Loading...")).not.toBeNull();
});

// test("button increments and decrements correctly", () => {
//   // Didn't work, said I needed to fire these in an act()
//   const { getByText } = render(<App />);
//   const num = getByText(0)
//   expect(num).not.toBeNull()
// })
