import React from 'react';

function RecipeThumbnail (props) {
  const recipe = props.recipe;
  console.log(recipe.image)
  return(
    <div className="recipe-thumbnail">
      <div className="thumbnail" style={{backgroundImage: `url(${recipe.image})`}}>
        <h3 className="thumbnail-title">{recipe.label}</h3>
      </div>
    </div>
  )

}

export default RecipeThumbnail;
