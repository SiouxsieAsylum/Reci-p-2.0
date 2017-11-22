import React, { Component } from 'react';

class RegisterForm extends Component {
  constructor(props){
    super(props)
    this.state={
      show: false,
      user: null,
    }
  }

  render(){
    return(
      <h1>Register</h1>
      <form>
        <input type="email" />
        <input type="password" />
        <input type="submit" value="Register" />
      </form>
    )
  }

}//END OF RECIPEFORM COMPONENT

export default RegisterForm;
