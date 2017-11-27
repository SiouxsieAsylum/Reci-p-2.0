import React from 'react';
import IngredientForm from './IngredientForm';

function RecipeSingle (props) {
  const recipeInfo = props.apiData[0];
  const ingredients = props.apiData[1];

  return(
    <div className="recipe-single">
      <h3>{recipeInfo.name}</h3><h3>Servings: {recipeInfo.serving_size}</h3>
      <div className="single-recipe-pic" style={{backgroundImage: `url(${recipeInfo.image})`}}></div>
      <ul className='recipe-ingredients'>
        {ingredients.map(ingredient => {
          return (<li key={ingredient.id} className='recipe-ingredient'>
            {ingredient.amount} {ingredient.unit} {ingredient.name}
          </li>)
        })}
      </ul>
      {recipeInfo.created_by === props.userid && (
      <IngredientForm
        getSingleRecipe={props.getSingleRecipe}
        recipe={recipeInfo.id}
      />
        )}
    </div>
  )
}

export default RecipeSingle;
