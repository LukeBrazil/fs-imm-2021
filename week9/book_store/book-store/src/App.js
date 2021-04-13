import React, { Component } from 'react'
import './App.css'

import Books from './components/Books'

export default class App extends Component {
  constructor(){
    super()
    this.state = {books: []}
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then((response) => response.json())
    .then((data) => this.setState({books: data}))
  }
  render() {
    return (
      <div>
        <Books books={this.state.books}></Books>
      </div>
    )
  }
}
