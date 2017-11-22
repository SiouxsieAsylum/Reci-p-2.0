import React, { Component } from 'react';
import RecipeList from './RecipeList';


class MainDisplay extends Component{
  constructor(props){
    super(props);

    this.state={
      apiData:null,
      apiLoaded:false,
      showRegister: false,

    }

  };

  render(){
    return(
      <div className="main-display">
        <button onClick={} >Register</button>
        <button>Login</button>

        <RegisterForm showRegister={this.state.showRegister} />

        <h1>MainDisplay RECIPENESS</h1>
        <RecipeList recipeToList={this.props.recipeToList}/>
      </div>
    )
  }//end of render


};//End of  Component MainDisplay


export default MainDisplay;
