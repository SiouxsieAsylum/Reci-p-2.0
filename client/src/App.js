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
      auth: false,
      username: "",
      userid: 1,
      listIndex: 1, // TODO this will be dynamic maybe based on user
      listRecipes: [],
      shoppingList: [],
    }

    this.recipeToList = this.recipeToList.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.logout = this.logout.bind(this);
  }

  getIngredientsList(){
    fetch(`/api/list/${this.state.listIndex}`)
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

  loginUser(username, id){
    console.log('user is loggin in to main:', username, id);
    this.setState({
      auth:true,
      username: username,
      userid: id,
    })
  }

  logout(){
    fetch('/api/auth/logout')
      .then(res => res.json())
      .then(json => {
        this.setState({
          auth: false,
          username: "",
          userid: 1,
        })
      }).catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <MainDisplay loginUser={this.loginUser} recipeToList={this.recipeToList} 
            logout={this.logout} auth={this.state.auth} username={this.state.username} 
            userid={this.state.userid}
          />
          <List />
        </div>

      </Router>
    );
  }
}

export default App;
