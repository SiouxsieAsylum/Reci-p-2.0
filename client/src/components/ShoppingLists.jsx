import React from 'react';

function ShoppingLists(props) {
  const shoppingLists = props.shoppingLists;
  return(
    <div className='shopping-lists'>
      <h2>User's Shopping Lists</h2>
      {shoppingLists.length === 0 && <p>Add a new Shopping list!</p>}
      <ul>
        {shoppingLists.map( (shoppingList) => {
          return <li key={shoppingList.list_id}>{shoppingList.name}</li>
        })}
      </ul>
    </div>
  )
}

export default ShoppingLists;