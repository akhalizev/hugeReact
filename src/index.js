import React from "react";
import ReactDom from "react-dom";
import './index.css';

//setup vars
// const Image = () => <img src="https://cdn.builtinaustin.com/cdn-cgi/image/f=auto,fit=crop,sharpen=.3,w=96,h=96/sites/www.builtinaustin.com/files/2020-11/Logo_Mark_Full_Color_Web_0.png" alt="" />
// const Title = () => <h1>This is a title</h1>
// const Author = () => <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop:'0.25rem', textTransform:'uppercase'}}>Author of this book</h4> //inline style

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

]


// const img = "https://cdn.builtinaustin.com/cdn-cgi/image/f=auto,fit=crop,sharpen=.3,w=96,h=96/sites/www.builtinaustin.com/files/2020-11/Logo_Mark_Full_Color_Web_0.png"
// const author = "Amelia Hepworth"
// const title = "I love you to the Moon and Back"


function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        //const { img, title, author } = book;
        return (
          <Book key={book.id} bookzuka={book}></Book>
        )

      })}
    </section>
  );
}

// const Book = ({ img, title, author, children}) => {
//   //const {img, author, title} = props   ––– destructuring
//   return <article className='book'>
//     {/* <Image />
//     <Title />
//     <Author /> */}
//     <img src={img} alt="" />
//     <h1>{author}</h1>
//     <h4>{title}</h4>
//     {children}
//   </article>
// }

const Book = (props) => {
  const {img, author, title} = props.bookzuka  // ––– destructuring
  return <article className='book'>
    {/* <Image />
    <Title />
    <Author /> */}
    <img src={img} alt="" />
    <h1>{author}</h1>
    <h4>{title}</h4>
    
  </article>
}




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
