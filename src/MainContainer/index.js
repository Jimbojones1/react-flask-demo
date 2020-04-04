import React, { Component } from 'react';
import SearchResultsList from '../components/SearchResultsList';
import SearchBar from '../components/SearchBar';

class MainContainer extends Component {
  constructor(){
    super();

    this.state = {
      searchYoutubeResults: []
    }
  }
  getYoutubeResults = async (searchTerm) => {
    console.log(searchTerm); // lifting

    // api call
    try {
      const request = await fetch(`/search/${searchTerm}`);
      const results = await request.json() // turns
      // our json into a js object that we can use

      this.setState({searchYoutubeResults: [...results.data.items]})



    } catch(err){
      console.log(err)
    }


  }
  render(){
    return (
      <React.Fragment>
        <h1>Youtube</h1>
        <SearchBar getYoutubeResults={this.getYoutubeResults}/>
        <SearchResultsList searchYoutubeResults={this.state.searchYoutubeResults}/>
      </React.Fragment>
      )
  }
}




export default MainContainer;
