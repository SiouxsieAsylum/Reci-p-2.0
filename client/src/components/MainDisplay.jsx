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
      user: null,
    }
    this.loginUser = this.loginUser.bind(this)
  };


  loginUser(id){
    this.setState({
      auth:true,
      user: id,
    })
  }

  render(){
    return(
      <div className="main-display">
        <Nav user={this.state.user}/>
        <h1>MainDisplay RECIPENESS</h1>
        <RecipeList recipeToList={this.props.recipeToList}/>
      </div>
    )
  }//end of render


};//End of  Component MainDisplay


export default MainDisplay;
