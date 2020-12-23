import React from 'react'

const Book = (props) => {

  //attribute, eventHandler
  //onClick, onMouseOver

  const {img, author, title} = props  // ––– destructuring
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('buy!')
  }
  const complexExample = (author) => {
    console.log(author);
  }
  return <article className='book' onMouseOver={
    () => {
      console.log(title);
    }
  }>
    {/* <Image />
    <Title />
    <Author /> */}
    <img src={img} alt="" />
    <h1 onClick={()=> console.log(author)}>{author}</h1>
    <h4>{title}</h4>
    <button type="button" onClick={clickHandler}>Example</button>
    <button type="button" onClick={() => complexExample(author)}>more complex example</button>
  </article>
}


export default Book
