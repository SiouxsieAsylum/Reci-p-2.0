import React, { Component } from 'react';

class RecipeForm extends Component {//CALL THE RECIPE NAME TITLE!!!!
  constructor(props){
    super(props)
    this.state={
      show: false,
    }//CALL THE RECIPE NAME TITLE!!!!
  }//CALL THE RECIPE NAME TITLE!!!!
//CALL THE RECIPE NAME TITLE!!!!
//CALL THE RECIPE NAME TITLE!!!!
//CALL THE RECIPE NAME TITLE!!!!
//CALL THE RECIPE NAME TITLE!!!!
//CALL THE RECIPE NAME TITLE!!!!
//CALL THE RECIPE NAME TITLE!!!!
//CALL THE RECIPE NAME TITLE!!!!
//CALL THE RECIPE NAME TITLE!!!!
//CALL THE RECIPE NAME TITLE!!!!
//CALL THE RECIPE NAME TITLE!!!!
//CALL THE RECIPE NAME TITLE!!!!
  render(){
    return(
      <h1>form</h1>
      <form>
        <input type="text" name="title" placeholder="Recipe Name"/>
        <input type="text" name="serving_size" placeholder="Servings"/>
        <input type="text" name="image" placeholder="Image URL"/>
        <input type="submit" />
      </form>
    )
  }

}//END OF RECIPEFORM COMPONENT

export default RecipeForm;
