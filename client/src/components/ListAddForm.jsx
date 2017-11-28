import React, { Component } from 'react';

class ListAddForm extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitList = this.submitList.bind(this);
  }

  handleChange(event){
    this.setState({
      name: event.target.value
    })
  }

  submitList(event){
    event.preventDefault();
    fetch('/api/list/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: this.props.userid,
        name: this.state.name
      })
    }).then(res => res.json())
    .then(json=> {
      console.log(json);
      //will call a change list button
    }).catch(err => console.log(err))
  }

  render(){
    return(
      <form onSubmit={this.submitList}>
        <input type="text" name="name" onChange={this.handleChange} 
          value={this.state.name} placeholder="Enter List Name"
        />
        <button type="submit">Create</button>
      </form>
    )
  }
}

export default ListAddForm;