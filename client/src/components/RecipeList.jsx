import React from 'react';
import RecipeThumbnail from './RecipeThumbnail'


const dummyData = require('./dummyJSON')

// console.log('dummy data works and is: ', dummyData);

function RecipeList(props){
  return(
    <div className="recipe-list">
      {dummyData.map(item => {
        return <RecipeThumbnail recipe={item.recipe}/>
      })}
    </div>
  )
}

export default RecipeList;
