import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import RecipeForm from './RecipeForm';
import RecipeSingle from './RecipeSingle';
import RecipeList from './RecipeList';
import Nav from './Nav';


class MainDisplay extends Component{

  constructor(props){
    super(props);
    /* Prop-list */
    //auth, username, userid
    // loginUser(logs in user in nav),
    // recipeToList(adds recipe id to shopping list)


    this.state={
      apiData:null,
      apiSingle: null,
      apiLoaded:false,
      show: "recipelist",

    }
    this.getAllRecipes = this.getAllRecipes.bind(this);
    this.getSingleRecipe = this.getSingleRecipe.bind(this);
    this.showAllRecipes = this.showAllRecipes.bind(this);
    this.setRecipeAfterAdding = this.setRecipeAfterAdding.bind(this);
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
        apiSingle: json.data.recipe,
        apiLoaded: true,
        show: 'single'
      })
    }).catch(err => console.log(err))
  }

  showAllRecipes(update){
    if(update){
      //do a fetch and then set state
    } else {
      this.setState({
        show: 'recipelist',
      })
    }

  }

  setRecipeAfterAdding(id){
    this.setState({
      apiSingle:id,
      show: 'single'
    })
  }

  render(){

    let tabShow = null;

    switch(this.state.show){
      case "recipelist":
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

            userid={this.props.userid}
            apiSingle={this.state.apiSingle}
            getSingleRecipe={this.getSingleRecipe}
          />
        )
        break;
      case "form":
        tabShow = (
          <RecipeForm
          userid={this.props.userid}
          setRecipe={this.getSingleRecipe}
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
        <Nav auth={this.props.auth} loginUser={this.props.loginUser} logout={this.props.logout} showAllRecipes={this.showAllRecipes}/>

        {this.state.apiLoaded  && (
          tabShow
        )}

      </div>
    )
  }//end of render


};//End of  Component MainDisplay


export default MainDisplay;
