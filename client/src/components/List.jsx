import React, { Component } from 'react';
import SingleList from './SingleList'

const dummyData = require('./dummyJSON') // PLACEHOLDER DATA


function List(props){
  const list = props.shoppingList;
  const recipes = props.shoppingRecipes;

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

  return(
    <div className="list-container">
      <h3 className="soft-title">Ingredients list</h3>
      {yourList}
      <form className="ingredient-form">
        <input type="text" name="addIngredient" placeholder="Add ingredient"/>
        <input type ="submit" value="Add" />
      </form>
    </div>
  )
}
export default List;
