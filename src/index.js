import React from "react";
import ReactDom from "react-dom";

import {books} from "./books"
import Book from "./Book"

import './index.css';





function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        //const { img, title, author } = book;
        return (
          <Book key={book.id} {...book}></Book> //spread operator
        )

      })}
    </section>
  );
}




//Greeting App rendered in a ROOT of Document
ReactDom.render(
  <div>
    <BookList />
  </div>,
  document.getElementById("root")
);
