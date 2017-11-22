import React from 'react';

import UserForm from './UserForm';

function Nav(props) {
  return(
    <div className="nav">
      <button >Register</button>
      <button>Login</button>
      <UserForm  />
    </div>
  )
}

export default Nav;
