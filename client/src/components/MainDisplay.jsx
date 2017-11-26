import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import RecipeList from './RecipeList';
import Nav from './Nav';


class MainDisplay extends Component{

  constructor(props){
    super(props);
    /* Prop-list */
    //auth, username
    // loginUser(logs in user in nav), 
    // recipeToList(adds recipe id to shopping list)

    this.state={
      apiData:null,
      apiLoaded:false,
    }
  };

  render(){
    return(
      <div className="main-display">
        <Nav auth={this.props.auth} loginUser={this.props.loginUser} logout={this.props.logout}/>

        <RecipeList recipeToList={this.props.recipeToList}/>
      </div>
    )
  }//end of render


};//End of  Component MainDisplay


export default MainDisplay;
