import React from 'react';

function RecipeThumbnail (props) {
  const recipe = props.recipe;
  const recipeToList = props.recipeToList;
  const id = props.recipe.id;


  return(
    <div className="thumbnail-container">
    <div className="thumbnail"
      style={{backgroundImage: `url(${recipe.image})`}}
      onClick={()=> props.getSingleRecipe(id)}
    >

      <h3 className="thumbnail-title">{recipe.name.substring(0,30)}...</h3>

    </div>
    <div className="add-recipe-button" onClick={() => recipeToList(id)}>Quick Add</div>

    </div>
  )

}

export default RecipeThumbnail;
