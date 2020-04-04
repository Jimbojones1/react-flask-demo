import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(){
    super();

    this.state = {}
  }


  render(){
    return (
      <React.Fragment>
        <h1>Youtube</h1>
        <SearchBar />
      </React.Fragment>
      )
  }
}




export default App;
