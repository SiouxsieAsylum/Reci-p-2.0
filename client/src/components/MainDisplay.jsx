import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import RecipeForm from './RecipeForm';
import RecipeSingle from './RecipeSingle';
import RecipeList from './RecipeList';
import ShoppingLists from './ShoppingLists';
import Nav from './Nav';

//acts as a controller for the main display
function MainDisplay(props){
  /* ------------------ Prop-list ------------------ */
    // Variables --
    //  auth, username, userid, apiData, apiLoaded, apiSingle, show, userShopLists
    //
    // Functions -- 
    //  loginUser(logs in user in nav),
    //  recipeToList(adds recipe id to shopping list)
    //  logout(logs user out in nav)
    //  getIngredientList (get the ingredients for a shopping list, needed to open shopping lists),
    //  listFormOn (turn on the make a list form)
    //  getUserLists (get a user's list of shopping lists)
    //  getAllRecipes (get all of the recipes)
    //  getSingleRecipe (get a single recipe by id)
    //  showRecipeForm (show the edit recipe form)
  /* ------------------    end    ------------------*/

  let tabShow = null;
  switch(props.show){
    case "recipelist":
      tabShow = (
        <RecipeList
          recipeToList={props.recipeToList}
          recipes={props.apiData}
          getSingleRecipe={props.getSingleRecipe}
        />
      )
      break;
    case "single":
      tabShow = (
        <RecipeSingle
          userid={props.userid}
          apiSingle={props.apiSingle}
          getSingleRecipe={props.getSingleRecipe}
        />
      )
      break;
    case "form":
      tabShow = (
        <RecipeForm
        userid={props.userid}
        setRecipe={props.getSingleRecipe}
        />
        )
      break;
    case 'shoppinglist':
      tabShow = (
        <ShoppingLists shoppingLists={props.userShopLists} 
        getIngredientsList={props.getIngredientsList} listFormOn={props.listFormOn}
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
      <Nav auth={props.auth} loginUser={props.loginUser} logout={props.logout}
        getAllRecipes={props.getAllRecipes} getUserLists={props.getUserLists} showRecipeForm={props.showRecipeForm}
      />

      {props.apiLoaded  && (
        tabShow
      )}

    </div>
  )
};//End of  Component MainDisplay


export default MainDisplay;
