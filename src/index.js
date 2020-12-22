import React from "react";
import ReactDom from "react-dom";
import './index.css';


const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/512V+zNxQ9L._SY375_.jpg",
    author: "Jake Knapp",
    title: "Sprint"
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/41EmSCSJQYL._SY375_.jpg",
    author: "Tanja Hester",
    title: "Work is optional"
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51llYNr0AJL._SY375_.jpg",
    author: "Susan Weinschenk",
    title: "100 Things Every Designer Needs to know"
  },

];


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


const Book = (props) => {
  const {img, author, title} = props  // ––– destructuring
  return <article className='book'>
    {/* <Image />
    <Title />
    <Author /> */}
    <img src={img} alt="" />
    <h1>{author}</h1>
    <h4>{title}</h4>
    
  </article>
}


//Greeting App rendered in a ROOT of Document
ReactDom.render(
  <div>
    <BookList />
  </div>,
  document.getElementById("root")
);
