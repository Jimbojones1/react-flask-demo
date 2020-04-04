import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';

class MainContainer extends Component {
  constructor(){
    super();

    this.state = {
      searchYoutubeResults: []
    }
  }
  getYoutubeResults = (searchTerm) => {
    console.log(searchTerm); // lifting

  }
  render(){
    return (
      <React.Fragment>
        <h1>Youtube</h1>
        <SearchBar getYoutubeResults={this.getYoutubeResults}/>
      </React.Fragment>
      )
  }
}




export default MainContainer;
