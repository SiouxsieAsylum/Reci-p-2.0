import React from 'react';

function RecipeSingle (props) {
  const recipeInfo = props.apiData[0];
  const ingredients = props.apiData[1];

  return(
    <div className="recipe-single">
      <h3>{recipeInfo.name}</h3><h3>Servings: {recipeInfo.serving_size}</h3>
      <div className="single-recipe-pic" style={{backgroundImage: `url(${recipeInfo.image})`}}></div>
      <p> hi </p>
    </div>
  )
}

export default RecipeSingle;
