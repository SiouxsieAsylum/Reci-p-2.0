import React from 'react';

function RecipeThumbnail (props) {
  const recipe = props.recipe;
  const recipeToList = props.recipeToList;
  const id = props.recipe.id;
  return(
    <div className="thumbnail"
      style={{backgroundImage: `url(${recipe.image})`}}
      onClick={() => recipeToList(id)}
    >
        <h3 className="thumbnail-title">{recipe.name}</h3>
    </div>
  )

}

export default RecipeThumbnail;
