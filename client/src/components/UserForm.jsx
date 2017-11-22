import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props){
    super(props)
    this.state={
      username: "",
      password: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event){
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]:value,
    })
  }

  handleSubmit(event){
    event.preventDefault();
    fetch(`api/auth/${this.props.postType}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(this.state)
    }).then(res => res.json())
      .then(res => {
        console.log(res.data);
        // if(this.props.postType === "register"){
        //   this.props.loginForm();
        // }else if(this.props.postType === "login"){
        //   this.props.loginUser(res.data.user);
        //
        // }
      }).catch(err => console.log(err));
  }


  render(){
    return(
    <div>
      <h1>{this.props.postType} form</h1>
      <form >
        <input type="text" name="username" />
        <input type="password" name="password" />
        <input type="submit" value={this.props.postType} />
      </form>
    </div>
    )
  }

}//END OF RECIPEFORM COMPONENT

export default UserForm;
