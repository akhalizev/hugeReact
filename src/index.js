import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "!hello world")
//   );
// };

const Person = () => <h2>john doe</h2>;
const Message = () => <h3>this is Anatoly and this is my first component</h3>;

ReactDom.render(
  <div>
    <Greeting />
  </div>,
  document.getElementById("root")
);
