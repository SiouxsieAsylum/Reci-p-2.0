import React, { Component } from 'react';

class RecipeForm extends Component {//CALL THE RECIPE NAME TITLE!!!!
  constructor(props){
    super(props)
    this.state={
      image: "",
      title: "",
      serving_size: ""
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
    fetch(`api/recipe/new`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(this.state)
    }).then(res => res.json())
      .then(res => {

        }
      }).catch(err => console.log(err));
  }


  render(){
    return(
      <h1>New Recipe</h1>
      <form>
        <input type="hidden" name="created_by"  value={this.props.userid}/>
        <input type="text" name="title" placeholder="Recipe Name"value={this.state.title}/>
        <input type="text" name="serving_size" placeholder="Servings"value={this.state.serving_size}/>
        <input type="text" name="image" placeholder="Image URL"/>
        <input type="submit" value={this.state.image}/>
      </form>
    )
  }

}//END OF RECIPEFORM COMPONENT

export default RecipeForm;
