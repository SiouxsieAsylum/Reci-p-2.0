import React, { Component } from 'react';

class RecipeForm extends Component {
  constructor(props){
    super(props)
    this.state={
      show: false,
    }
  }

  render(){
    return(
      <h1>form</h1>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="submit" />
      </form>
    )
  }

}//END OF RECIPEFORM COMPONENT

export default RecipeForm;
