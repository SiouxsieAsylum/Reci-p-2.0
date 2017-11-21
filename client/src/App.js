import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

//-----------imported components----------------//
import MainDisplay from './components/MainDisplay';
import List from './components/List'

class App extends Component {
  constructor(){
    super();
    this.state={
      //will need user logged in
      listIndex: 1, //this will be dynamic maybe based on user
      listRecipes: [],
    }

    this.recipeToList = this.recipeToList.bind(this);
  }

  recipeToList(recipeId){
    console.log('this was called and listIndex is: ', this.state.listIndex);
    console.log('recipeid is: ', recipeId);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <MainDisplay recipeToList={this.recipeToList}/>
          <List />
        </div>

      </Router>
    );
  }
}

export default App;
