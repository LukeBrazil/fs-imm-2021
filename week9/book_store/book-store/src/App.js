import React, { Component } from 'react';
import './App.css';

import Books from './components/Books'

export default class App extends Component {
  constructor(){
    super()
    this.state = {books: []}
  }

  componentDidMount() {
    fetch('http://localhost:3001/books')
    .then((response) => response.json())
    .then((data) => console.log(data))
  }
  render() {
    return (
      <div>
        <Books books={this.state.books}></Books>
      </div>
    )
  }
}
