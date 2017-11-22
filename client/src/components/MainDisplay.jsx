import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import RecipeList from './RecipeList';
import RegisterForm from './RegisterForm'


class MainDisplay extends Component{
  constructor(props){
    super(props);

    this.state={
      apiData:null,
      apiLoaded:false,
      auth: false,
      user: null,

    }

  };

  render(){
    return(
      <div className="main-display">
        <button >Register</button>
        <button>Login</button>

        <RegisterForm  />

        <h1>MainDisplay RECIPENESS</h1>
        <RecipeList recipeToList={this.props.recipeToList}/>
      </div>
    )
  }//end of render


};//End of  Component MainDisplay


export default MainDisplay;
