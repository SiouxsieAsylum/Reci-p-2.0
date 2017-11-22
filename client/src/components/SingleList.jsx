import React from 'react';

function SingleList (props) {
  const ingredient = props.ingredient;
  console.log("ingredient DATA " + props)
  return(
    <div className="single-list">
      {ingredient.ingredientLines.map((item,index) => {
       return  <p key={index} className="single-ingredient">{item}</p>
      })}
    </div>
  )
}

export default SingleList;
