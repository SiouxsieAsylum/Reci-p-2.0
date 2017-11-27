import React, {Component} from 'react';

class IngredientForm extends Component{
  constructor(props){
    super();
    this.state={
      name:"",
      amount:"",
      unit:""
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
    fetch(`api/recipe/${this.props.recipe}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(res => {

      this.props.getSingleRecipe(this.props.recipe)
    })
    .catch(err => console.log(err))
  }


  render(){
  return(
    <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleInputChange} name="name" placeholder="Ingredient" value={this.state.name}/>
      <input onChange={this.handleInputChange} name="amount" placeholder="Amount" value={this.state.amount}/>
      <input onChange={this.handleInputChange} name="unit" placeholder="Unit" value={this.state.unit}/>
      <input type="submit" value="submit"/>
    </form>
    )
  }
}

export default IngredientForm;
