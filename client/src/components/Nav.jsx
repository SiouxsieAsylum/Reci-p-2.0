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

    return(
      <div className="nav">
        <button onClick={this.registerForm}>Register</button>
        <button onClick={this.loginForm}>Login</button>
        {this.state.postType ? <UserForm postType={this.state.postType} /> : null}
      </div>
    )
  }
}

export default Nav;
