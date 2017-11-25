import React from 'react';

function ShoppingLists(props) {
  const shopping_lists = props.shopping_lists;
  return(
    <div className='shopping_lists'>
      <h2>User's Shopping Lists</h2>
      <ul>
        {shopping_lists.map( (shopping_list) => {
          return <li key={shopping_list.list_id}>{shopping_list.name}</li>
        })}
      </ul>
    </div>
  )
}

export default ShoppingLists;