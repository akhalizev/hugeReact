import React from "react";
import ReactDom from "react-dom";
import './index.css';

//components are going here, in this App called Greeting
function BookList() {
  return (
    <section className="booklist">
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}

const Book = () => {
  return <article>
    <Image />
    <Title />
    <Author/>
  </article>
}

const Image = () => <img src="https://cdn.builtinaustin.com/cdn-cgi/image/f=auto,fit=crop,sharpen=.3,w=96,h=96/sites/www.builtinaustin.com/files/2020-11/Logo_Mark_Full_Color_Web_0.png" alt="" />

const Title = () => <h1>This is a title</h1>
const Author = () => <h2>Author of this book</h2>
// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "!hello world")
//   );
// };

// const Person = () => <h2>john doe</h2>; //one component
// const Message = () => <h3>this is AnatolY and this is my first component</h3>; //other component



//Greeting App rendered in a ROOT of Document
ReactDom.render(
  <div>
    <BookList />
  </div>,
  document.getElementById("root")
);
