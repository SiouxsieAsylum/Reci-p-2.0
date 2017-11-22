import React, { Component } from 'react';

class RegisterForm extends Component {
  constructor(props){
    super(props)
    this.state={
      username: "",
      password: "",
    }
    this.showDisplay = this.showDisplay.bind(this);
  }

  handleInputChange(event){
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]:value,
    })
  }


  render(){
    return(
      <h1>Register</h1>
      <form>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <input type="submit" value="Register" />
      </form>
    )
  }

}//END OF RECIPEFORM COMPONENT

export default RegisterForm;
