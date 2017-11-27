import React from 'react';
import IngredientForm from './IngredientForm';



function RecipeSingle (props) {
  const recipeInfo = props.apiData[0];
  const ingredients = props.apiData[1];

  function deleteIngredient(ingredient_id){
  fetch(`api/recipe/${recipeInfo.id}/${ingredient_id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      props.getSingleRecipe(props.apiData[0].id)
    })
}

  return(
    <div className="recipe-single">
      <h3>{recipeInfo.name}</h3><h3>Servings: {recipeInfo.serving_size}</h3>
      <div className="single-recipe-pic" style={{backgroundImage: `url(${recipeInfo.image})`}}></div>
      <ul className='recipe-ingredients'>
        {ingredients.map(ingredient => {
          return (<li key={ingredient.id} className='recipe-ingredient'>
            {ingredient.amount} {ingredient.unit} {ingredient.name}
          {recipeInfo.created_by === props.userid && (
            <button onClick={() => deleteIngredient(ingredient.id)}>Delete Me</button>
            )}
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
