import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(){
    super();

    this.state={
      searchTerm: ''
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  render(){
    return (
      <form>
        <input type='text' name='searchTerm' value={this.state.searchTerm} onChange={this.handleChange}/>
        <button>Search</button>
      </form>
      )
  }
}

export default SearchBar;