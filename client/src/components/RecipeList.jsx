import React from 'react';
import RecipeThumbnail from './RecipeThumbnail'


const dummyData = require('./dummyJSON')

console.log('dummy data works and is: ', dummyData);

function RecipeList(props){
  return(
    <div className="recipe-list">
      <RecipeThumbnail recipe={dummyData[0].recipe}/>
    </div>
  )
}

export default RecipeList;
