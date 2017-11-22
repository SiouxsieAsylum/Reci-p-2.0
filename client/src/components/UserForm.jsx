import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props){
    super(props)
    this.state={
      username: "",
      password: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event){
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]:value,
    })
  }

  handleSubmit(){
    fetch('api/auth')
  }


  render(){
    return(
    <div>
      <h1>User form</h1>
      <form >
        <input type="text" name="username" />
        <input type="password" name="password" />
        <input type="submit" value="Register" />
      </form>
    </div>
    )
  }

}//END OF RECIPEFORM COMPONENT

export default UserForm;
