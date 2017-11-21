import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

//-----------imported components----------------//
import MainDisplay from './components/MainDisplay';
import List from './components/List'

class App extends Component {
  constuctor(){
    super();
    this.state={
      //will need user logged in
      currentList: 1, //this will be dynamic maybe based on user
      
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <MainDisplay />
          <List />
        </div>

      </Router>
    );
  }
}

export default App;
