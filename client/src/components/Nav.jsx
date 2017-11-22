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
      postType: "register"
    })
  }

  loginForm(){
    this.setState({
      postType: "login"
    })
  }

  render(){
    let navLogin = null;
    if(!this.props.auth){
      navLogin = (
        <div className="nav">
          <button onClick={this.registerForm}>Register</button>
          <button onClick={this.loginForm}>Login</button>
          {this.state.postType ? (
            <UserForm loginForm={this.loginForm} postType={this.state.postType}
              loginUser={this.props.loginUser}
            />
          ) : null}
        </div>
      )
    } else {
      navLogin = (
        <div className="nav">
          <button>Logout</button>
        </div>
      )
    }

    return(
      <div className="nav">
        {navLogin}
      </div>
    )
  }
}

export default Nav;
