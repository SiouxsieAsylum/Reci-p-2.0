import React from 'react';
import RecipeThumbnail from './RecipeThumbnail'


function RecipeList(props){
  const recipes = props.recipes;
  return(
    <div className="recipe-list">
      {recipes.map( (recipe, index) => {
        return <RecipeThumbnail recipe={recipe} key={index}
        recipeToList={props.recipeToList}
      />
      })}
    </div>
  )
}

export default RecipeList;
