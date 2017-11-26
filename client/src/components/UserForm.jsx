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
        if(this.props.postType === "Register"){
          this.props.loginForm();
        }else if(this.props.postType === "Login"){
          this.props.loginUser(res.data.user.username, res.data.user.id);
        }
      }).catch(err => console.log(err));
  }


  render(){
    return(
    <div>
      <form onSubmit={this.handleSubmit}>
        {/* <span>{this.props.postType} form</span> */}
        <input type="text" name="username" value={this.state.username}
          onChange={this.handleInputChange} placeholder="Username"
        />
        <input type="password" name="password" value={this.state.password}
          onChange={this.handleInputChange} placeholder="Password"
        />
        <input type="submit" value={this.props.postType} />
      </form>
    </div>
    )
  }

}//END OF RECIPEFORM COMPONENT

export default UserForm;
