import React from 'react';

function RecipeThumbnail (props) {
  const recipe = props.recipe;
  console.log(recipe.image)
  return(
    <div className="recipe-thumbnail">
      <div className="thumbnail" style={{background: `url(${recipe.image})`}}>
        <h3>{recipe.label}</h3>
      </div>
    </div>
  )

}

export default RecipeThumbnail;
