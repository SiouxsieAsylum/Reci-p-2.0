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
      auth: false, // makes it easier to handle logged in / not logged users
      username: "",
      userid: 1, // default 1 for non-logged in user. changes when user logs in
      listIndex: 1, // changes when new list created or user list selected
      listName: "",
      apiData: [], // holds all of the recipes
      apiLoaded: null,
      apiSingle: null,
      userShopLists: null,
      shoppingList: [], // ingredient list for selected shopping list
      shoppingRecipes: [], // recipes in a shopping list
      addList: false, // should the addNewList form be open?
      show: "recipelist", // a show string for the Main Display Controller
    }

    this.recipeToList = this.recipeToList.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.logout = this.logout.bind(this);
    this.getIngredientsList = this.getIngredientsList.bind(this);
    this.listFormOn = this.listFormOn.bind(this);
    this.submitList = this.submitList.bind(this);
    this.getAllRecipes = this.getAllRecipes.bind(this); 
    this.getSingleRecipe = this.getSingleRecipe.bind(this);
    this.getUserLists = this.getUserLists.bind(this);
    
  }

  componentDidMount(){
    this.getAllRecipes()
  }

  //----- get data from our api -----

  //get all of the recipes
  getAllRecipes(){
    fetch('/api/recipe',{
      method : "GET",
    }).then(res => res.json()
  ).then(json => {
      this.setState({
        apiData: json.data.recipes,
        apiLoaded: true,
      })
    }).catch(err => console.log(err))
  }

  //get a recipe by id
  getSingleRecipe(id){
    fetch(`api/recipe/${id}`,{
      method: "GET",
    }).then(res => res.json()
    ).then(json => {
      console.log(json.data.recipe)
      this.setState({
        apiSingle: json.data.recipe,
        apiLoaded: true,
        show: 'single'
      })
    }).catch(err => console.log(err))
  }
  
  // get a users shopping lists for clicking in the nav
  getUserLists(){
    fetch(`/api/list/user/${this.state.userid}`, {
      method: 'GET',
    }).then(res => res.json())
      .then(json => {
        this.setState({
          userShopLists: json.data.lists,
          show: 'shoppinglist'
        })
      }).catch(err => console.log(err))
  }

  //we will need to call this whenever the listindex changes and when we add a recipe to list
  getIngredientsList(newIndex){
    let listIndex = null;
    if(newIndex){
      listIndex = newIndex;
      this.setState({listIndex: newIndex});
    } else {
      listIndex = this.state.listIndex;
    }

    //get the list name
    fetch(`/api/list/listname/${listIndex}`, {
      method: 'GET',
    }).then(res => res.json())
    .then(json => {
      this.setState({
        listName: json.data.name.name
      })

      //get all of the ingredients
      fetch(`/api/list/${listIndex}`, {
        method: 'GET'
      }).then(res => res.json())
      .then(json => {
        console.log('i like what you got', json);
        this.setState({
          shoppingList: json.data.list,
        })

        //get all of the recipe names
        fetch(`/api/list/names/${listIndex}`, {
          method: 'GET'
        }).then(res => res.json())
        .then(json => {
          console.log(json)
          this.setState({
            shoppingRecipes: json.data.recipes,
          })
        }).catch(err => console.log(err))
      }).catch(err => console.log(err))
    }).catch(err => console.log(err))
  }

  // ----- add recipe to list, call get shopping list -----
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
        this.getIngredientsList();
      }).catch(err => console.log(err));
    } else {
      alert('please create a list first!');
    }
  }

  //----- functions for user login -----
  loginUser(username, id){
    this.setState({
      auth:true,
      username: username,
      userid: id,
      listIndex: 1,
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

  //----- list form functions -----
  //-- turn on addListForm view on list component ---
  listFormOn(){
    this.setState({
      listIndex: 1,
      addList: true,
    })

  }
  //-- set the submitted list index and name to state for rendering --
  submitList(listIndex, name){
    this.setState({
      listIndex: listIndex,
      listName: name,
      addList: false,
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <MainDisplay
            //variables
            auth={this.state.auth}
            username={this.state.username}
            userid={this.state.userid}
            apiData={this.state.apiData}
            apiLoaded={this.state.apiLoaded}
            apiSingle={this.state.apiSingle}
            show={this.state.show}
            userShopLists={this.state.userShopLists}

            //functions
            loginUser={this.loginUser}
            recipeToList={this.recipeToList}
            logout={this.logout}
            getIngredientsList={this.getIngredientsList}
            listFormOn={this.listFormOn}
            getUserLists={this.getUserLists}
          />

          <List
            shoppingList={this.state.shoppingList}
            shoppingRecipes={this.state.shoppingRecipes}
            listIndex={this.state.listIndex}
            getIngredientsList={this.getIngredientsList}
            listFormOn={this.listFormOn} addList={this.state.addList}
            userid={this.state.userid} submitList={this.submitList}
            listName={this.state.listName}
          />
        </div>

      </Router>
    );
  }
}

export default App;
