import React, { Component } from 'react';
import RecipeList from './RecipeList';


class MainDisplay extends Component{
  constructor(props){
    super(props);

    this.state={
      apiData:null,
      apiLoaded:false,

    }

  };

  render(){
    return(
      <div className="main-display">
<<<<<<< HEAD
      <h1>MainDisplay RECIPENESS</h1>
      <RecipeList />
=======
      <h1>MainDisplay</h1>
      <RecipeList recipeToList={this.props.recipeToList}/>
>>>>>>> create stubbed recipeToList and pass from app to thumbnail
      </div>
    )
  }//end of render


};//End of  Component MainDisplay


export default MainDisplay;
