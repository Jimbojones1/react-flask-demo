import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './MainContainer';

class App extends Component {
  constructor(){
    super();

    this.state = {}
  }


  render(){
    return (
      <React.Fragment>
        <MainContainer />
      </React.Fragment>
      )
  }
}




export default App;
