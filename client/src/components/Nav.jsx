import React, { Component } from 'react';

import UserForm from './UserForm';

class  Nav extends Component {
  constructor(props){
    super(props)
    this.state={
      postType: null,
    }
    this.registerForm = this.registerForm.bind(this)
    this.loginForm = this.loginForm.bind(this)

  }

  registerForm(){
    this.setState({
      postType: "Register"
    })
  }

  loginForm(){
    this.setState({
      postType: "Login"
    })
  }

  render(){
    const navLinks= (
      <div className="nav-links">
        <div>add recipe</div>
        <div>favorites</div>
        <div>lists</div>
      </div>
    )

    const login=(
      <div className='login'>
        <button onClick={this.registerForm}>Register</button>
        {this.state.postType !== 'Login' && (
          <button onClick={this.loginForm}>Login</button>
        )}
        
        {this.state.postType ? (
          <UserForm loginForm={this.loginForm} 
            postType={this.state.postType} loginUser={this.props.loginUser}
          />
      ) : null}
      </div>
    )

    return(
      <div className='nav'>
        <div className="logo">LOGO</div>
        {this.props.auth && navLinks}
        {!this.props.auth ? login : <button>Logout</button>}
      </div>
    )
  }
}

export default Nav;
