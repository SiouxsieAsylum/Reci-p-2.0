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
        <h1>Recipeness</h1>
        <button className="nav-button" onClick={this.registerForm}>Register</button>
        <button className="nav-button" onClick={this.loginForm}>Login</button>
        {this.state.postType ? (
          <div className="inner-header">
            <div className="nav-links">
              <p>home</p>
              <p>add recipe</p>
              <p>favorites</p>
              <p>lists</p>
            </div>

            <UserForm loginForm={this.loginForm} postType={this.state.postType}
              loginUser={this.props.loginUser}
            />
          </div>
        ) : null}
      </div>
    )
  }
}

export default Nav;
