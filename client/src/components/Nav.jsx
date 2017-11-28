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
        {this.props.auth && <div className="link" onClick={this.props.showRecipeForm}>ADD RECIPES</div>}
        <div className="link" onClick={()=>this.props.showAllRecipes(false)}>RECIPES</div>
        {this.props.auth && <div className="link" onClick={this.props.getUserLists}>SHOPPING LISTS</div>}
      </div>
    )

    const login=(
      <div className='login'>
        {this.state.postType !== 'Register' && (
          <button onClick={this.registerForm}>Register</button>
        )}

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
      <div className="nav-container">


        <div className="user-form">
          {!this.props.auth ? login : <button onClick={this.props.logout}>Logout</button>}
        </div>
        <h1 className="logo">Recipeness</h1>
          {navLinks}


      </div>
    )
  }
}

export default Nav;
