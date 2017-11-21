import React from 'react';

function RecipeThumbnail (props) {
  const recipe = props.recipe;
  return(
    <div className="thumbnail" style={{backgroundImage: `url(${recipe.image})`}}>
        <h3 className="thumbnail-title">{recipe.label}</h3>
    </div>
  )

}

export default RecipeThumbnail;
