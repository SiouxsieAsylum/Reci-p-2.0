import React from 'react';
import RecipeThumbnail from './RecipeThumbnail'


function RecipeList(props){
  const recipes = props.recipes;
  return(
    <div>
      <h3 className="kicker">Let's get cooking!</h3>

      <div className="recipe-list">
        {recipes.map( (recipe, index) => {
          return <RecipeThumbnail recipe={recipe} key={index}
          recipeToList={props.recipeToList}
          getSingleRecipe={props.getSingleRecipe}
        />
        })}
      </div>
    </div>
  )
}

export default RecipeList;
