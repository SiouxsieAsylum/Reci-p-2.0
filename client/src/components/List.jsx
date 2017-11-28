import React, { Component } from 'react';
import ListAddForm from './ListAddForm';
import SingleList from './SingleList'

function List(props){
  const list = props.shoppingList;
  const recipes = props.shoppingRecipes;
  const listIndex = props.listIndex;
  const getIngredientsList = props.getIngredientsList;
  const listFormOn = props.listFormOn;
  const addList = props.addList;
  const userid = props.userid;
  const submitList = props.submitList;

  function removeRecipeFromList(recipe_id){
    fetch(`/api/list/recipe/${recipe_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        list_id: listIndex,
      })
    }).then(res => res.json())
    .then(json => {
      console.log(json);
      getIngredientsList();
    }).catch(err => console.log(err));
  }

  let yourList = null;
  if(list.length === 0) {
    yourList=(
      <p>Add recipes to your shopping list!</p>
    )
  }else {
    yourList=(
      list.map((ingredient,index) => {
        return <SingleList key={index} ingredient={ingredient}/>
      })
    )
  }
  
  let listRecipes = null;
  if(recipes.length !== 0){
    listRecipes = (
      recipes.map((recipe, index) => {
        return (<li key={index}>
          <button onClick={() => removeRecipeFromList(recipe.id)}>-</button>{recipe.name}
        </li>)
      })
    )
  }

  let newList = null;
  addList ? (
    newList = <ListAddForm userid={userid} submitList={submitList}/>
  ) : (
    newList = <button onClick={listFormOn}>Create New List!</button>
  )
  


  return(
<<<<<<< HEAD
    <div className='list-container'>
      {listIndex === 1 ? (
        <div >
          {newList}
        </div>
      ) : (
        <div>
          <h3 className="soft-title">Ingredients list</h3>
          
          <ul className='shopping-recipes'>
            {recipes.length !== 0 && <h4>Recipes</h4>}
            {listRecipes}
          </ul>
          {yourList}
          <form className="ingredient-form">
            <input type="text" name="addIngredient" placeholder="Add ingredient"/>
            <input type ="submit" value="Add" />
          </form>
        </div>
      )}
=======
    <div className="list-container">
      <h3 className="ingredients-title">Ingredients list</h3>
      {yourList}
      <form className="ingredient-form">
        <input type="text" name="addIngredient" placeholder="Add ingredient"/>
        <input type ="submit" value="Add" />
      </form>
>>>>>>> hefty styling/ add bkgnd list
    </div>
  )
}
export default List;
