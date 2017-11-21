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
      <div className="main-display">
      <h1>MainDisplay</h1>
      </div>
    )
  }//end of render


};//End of  Component MainDisplay


export default MainDisplay;
