import React from 'react';

function ShoppingLists(props) {
  const shoppingLists = props.shoppingLists;
  const getIngredientsList = props.getIngredientsList;
  const listFormOn = props.listFormOn;
  return(
    <div className='shopping-lists'>
      <h2>User's Shopping Lists</h2>
      <button onClick={listFormOn}>Create New List</button>
      <ul>
        {shoppingLists.map( (shoppingList) => {
          return (<li key={shoppingList.list_id} 
              onClick={() => getIngredientsList(shoppingList.list_id)}>
              {shoppingList.name}
            </li>)
        })}
      </ul>
    </div>
  )
}

export default ShoppingLists;