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
      auth: null,
      user: null,
      //will need user logged in
      listIndex: 1, //this will be dynamic maybe based on user
      listRecipes: [],
    }

    this.recipeToList = this.recipeToList.bind(this);
  }

  recipeToList(recipeId){
    fetch(`/api/recipe/${this.state.listIndex}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({recipe_id: recipeId})
    }).then(res => res.json())
    .then(res => {
      console.log(res);

    }).catch(err => console.log(err));
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
