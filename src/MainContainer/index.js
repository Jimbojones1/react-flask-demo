import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';

class MainContainer extends Component {
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




export default MainContainer;
