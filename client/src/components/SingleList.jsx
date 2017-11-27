import React from 'react';

function SingleList (props) {
  const ingredient = props.ingredient;
  return(
    <div className="single-list">
      <p className="single-ingredient">{ingredient.amount} {ingredient.unit} {ingredient.name}</p>
    </div>
  )
}

export default SingleList;
