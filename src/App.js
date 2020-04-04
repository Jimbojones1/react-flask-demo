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
    // setup the router from react router
    // this is where you define the routes
    // Make a header component, that has links to the maincontainer
    // and myabe an about page, that will be rendered on every page
    // a route for MainContainer
    // a route for an About Page

    // Landing Page, localhost:3000 this page accepts an input
    // with the users name, Which will stored in app.js state
    // then you'll direct the user to the mainContainer which is different
    // route
    // and in the maincontainer pass it the prop of the persons
    // username and leave a message
    return (
      <React.Fragment>
        <MainContainer />
      </React.Fragment>
      )
  }
}




export default App;
