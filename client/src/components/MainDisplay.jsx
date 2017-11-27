import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import RecipeSingle from './RecipeSingle';
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
      show: "list",
    }
    this.getAllRecipes = this.getAllRecipes.bind(this);
    this.getSingleRecipe = this.getSingleRecipe.bind(this);
  };

  componentDidMount(){
    this.getAllRecipes()
  }

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

  getSingleRecipe(id){
    fetch(`api/recipe/${id}`,{
      method: "GET",
    }).then(res => res.json()
    ).then(json => {
      console.log(json.data.recipe)
      this.setState({
        apiData: json.data.recipe,
        apiLoaded: true,
        show: 'single',
      })
    }).catch(err => console.log(err))
  }


  render(){

    let tabShow = null;

    switch(this.state.show){
      case "list":
        tabShow = (
          <RecipeList
            recipeToList={this.props.recipeToList}
            recipes={this.state.apiData}
            getSingleRecipe={this.getSingleRecipe}
          />
        )
        break;
      case "single":
        tabShow = (
          <RecipeSingle
            apiData={this.state.apiData}
          />
        )
        break;
      default:
        tabShow=(
          <p>This is the default in switch: please seek help with DRAKE</p>
        )

    }

    return(
      <div className="main-display">
        <Nav auth={this.props.auth} loginUser={this.props.loginUser} logout={this.props.logout}/>

        {this.state.apiLoaded  && (
          tabShow
        )}

      </div>
    )
  }//end of render


};//End of  Component MainDisplay


export default MainDisplay;
