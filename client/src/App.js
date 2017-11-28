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
      shoppingRecipes: [],
      addList: false,
    }

    this.recipeToList = this.recipeToList.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.logout = this.logout.bind(this);
    this.getIngredientsList = this.getIngredientsList.bind(this);
    this.listFormOn = this.listFormOn.bind(this);
    this.submitList = this.submitList.bind(this);
  }

  getIngredientsList(){
    //we will need to call this whenver the listindex changes and when we add a recipe to list
    fetch(`/api/list/${this.state.listIndex}`, {
      method: 'GET'
    }).then(res => res.json())
    .then(json => {
      console.log(json);
      this.setState({
        shoppingList: json.data.list,
      })

      fetch(`/api/list/names/${this.state.listIndex}`, {
        method: 'GET'
      }).then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          shoppingRecipes: json.data.recipes,
        })
      })

    }).catch(err => console.log(err));

  }

  recipeToList(recipeId){
    if(this.state.listIndex !== 1){
      fetch(`/api/recipe/${recipeId}/${this.state.listIndex}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: this.state.userid})
      }).then(res => res.json())
      .then(res => {
        console.log(res);
        this.getIngredientsList();
      }).catch(err => console.log(err));
    } else {
      alert('please create a list first!');
    }
  }

  loginUser(username, id){
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

  listFormOn(){
    this.setState({
      listIndex: 1,
      addList: true,
    })
  }

  submitList(listIndex){
    this.setState({
      listIndex: listIndex,
      addList: false,
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <MainDisplay loginUser={this.loginUser} recipeToList={this.recipeToList}
            logout={this.logout} auth={this.state.auth} username={this.state.username}
            userid={this.state.userid}
          />

          <List shoppingList={this.state.shoppingList}
            shoppingRecipes={this.state.shoppingRecipes} listIndex={this.state.listIndex}
            getIngredientsList={this.getIngredientsList}
            listFormOn={this.listFormOn} addList={this.state.addList}
            userid={this.state.userid} submitList={this.submitList}
          />
        </div>

      </Router>
    );
  }
}

export default App;
