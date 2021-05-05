import React, { Component } from 'react'
import './Books.css'

export default class Books extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
       const books = this.props.books
       const bookItems = books.map((book, index) => {
           return (
               <div className="books" key={index}>
                   <h6>{book.name}</h6>
                   <p>Author: {book.genre}</p>
                   {/* <p>Language: {book.language}</p>
                   <img src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}?raw=true`}></img> */}
               </div>
           )
       })
        return (
            <div className="booksDisplay">
                {bookItems}
            </div>
        )
    }
}
