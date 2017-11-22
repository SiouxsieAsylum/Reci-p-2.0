import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import RecipeList from './RecipeList';
import Nav from './Nav';


class MainDisplay extends Component{
  constructor(props){
    super(props);

    this.state={
      apiData:null,
      apiLoaded:false,
      auth: false,
      username: "",
      userid: 1,
    }
  };

  render(){
    return(
      <div className="main-display">
        <Nav auth={this.props.auth} loginUser={this.props.loginUser}/>
        <h1>MainDisplay RECIPENESS</h1>
        <RecipeList recipeToList={this.props.recipeToList}/>
      </div>
    )
  }//end of render


};//End of  Component MainDisplay


export default MainDisplay;
