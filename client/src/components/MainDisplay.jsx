import React, { Component } from 'react';


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
      <h1>MainDisplay</h1>
      
    )
  }


};//End of  Component


export default MainDisplay;
