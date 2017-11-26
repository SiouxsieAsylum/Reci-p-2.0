import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import RecipeList from './RecipeList';
import Nav from './Nav';


class MainDisplay extends Component{

  constructor(props){
    super(props);
    /* Prop-list */
    //auth, username
    // loginUser(logs in user in nav),
    // recipeToList(adds recipe id to shopping list)

    this.state={
      apiData:null,
      apiLoaded:false,
    }
    this.getAllRecipes = this.getAllRecipes.bind(this)
  };

  componentDidMount(){
    this.getAllRecipes()
  }

  getAllRecipes(){
    fetch('/api/recipe',{
      method : "GET",
    }).then(res => res.json()
  ).then(json => {
      console.log(json)
      this.setState({
        apiData: json.data.recipes,
      })
    }).catch(err => console.log(err))
  }

  render(){
    return(
      <div className="main-display">
        <Nav auth={this.props.auth} loginUser={this.props.loginUser} logout={this.props.logout}/>

        <RecipeList recipeToList={this.props.recipeToList}/>
      </div>
    )
  }//end of render


};//End of  Component MainDisplay


export default MainDisplay;
