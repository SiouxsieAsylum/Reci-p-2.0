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

  function removeRecipeFromList(recipe){
    fetch(`/api/list/recipe/${recipe}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({
      //   list_id: listIndex,
      // })
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
        console.log(recipe)
        return (<li key={index}>
          <button onClick={() => removeRecipeFromList(recipe.recipe_added)}>-</button>{recipe.name}
        </li>)
      })
    )
  }

  let newList = null;
  addList ? (
    newList = <ListAddForm userid={userid} submitList={submitList}/>
  ) : (
    newList = <button className="create-new-list-button" onClick={listFormOn}>Create New List!</button>
  )



  return(
    <div className='list-container'>
      {listIndex === 1 ? (
        <div className="create-button-center">
          {newList}
        </div>
      ) : (
        <div>
          <h3 className="ingredients-title">{props.listName}</h3>

          <ul className='shopping-recipes'>
            {recipes.length !== 0 && <h4>Recipes</h4>}
            {listRecipes}
          </ul>
          {yourList}
        </div>
      )}
    </div>
  )
}
export default List;
