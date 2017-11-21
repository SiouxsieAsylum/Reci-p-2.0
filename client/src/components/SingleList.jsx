import React from 'react';

function SingleList (props) {
  const ingredient = props.ingredient;
  console.log("ingredient DATA " + props)
  return(
    <div className="single-list">
      {ingredient.ingredientLines.map(item => {
       return  <p>{item}</p>
      })}
      <form>
        <input type="text" />
      </form>
    </div>
  )
}

export default SingleList;
