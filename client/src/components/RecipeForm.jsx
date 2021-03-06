import React, { Component } from 'react';

class RecipeForm extends Component {//CALL THE RECIPE NAME TITLE!!!!
  constructor(props){
    super(props)
    this.state={
      image: "",
      title: "",
      serving_size: "",
      created_by:this.props.userid
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

  // add column to Recipe
  // added perameter to crete Recipe

  handleSubmit(event){
    event.preventDefault();
    fetch(`api/recipe`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
          this.props.setRecipe(res.data.recipe.id)
        }).catch(err => console.log(err));
  }

  render(){
    return(
      <div>
      <h1>New Recipe</h1>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleInputChange} type="hidden" name="created_by" value={this.props.userid}/>
        <input onChange={this.handleInputChange} type="text" name="title" placeholder="Recipe Name" value={this.state.title}/>
        <input onChange={this.handleInputChange} type="text" name="serving_size" placeholder="Servings"value={this.state.serving_size}/>
        <input onChange={this.handleInputChange} type="text" name="image" placeholder="Image URL" value={this.state.image}/>
        <input type="submit" value="submit"/>
      </form>
      </div>
    )
  }

}//END OF RECIPEFORM COMPONENT

export default RecipeForm;
