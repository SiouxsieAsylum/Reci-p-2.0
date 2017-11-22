import React from 'react';

import RegisterForm from './RegisterForm';

function Nav(props) {
  return(
    <div className="nav">
      <button >Register</button>
      <button>Login</button>
      <RegisterForm  />
    </div>
  )
}

export default Nav;
