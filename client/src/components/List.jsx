import React, { Component } from 'react';

class List extends Component{
  constructor(props){
    super(props)
    this.state={
      apiLoaded:false,

    }

  }

  render(){
    return(
      <p>List Component</p>
    )

  }//end of render

}//end of LIST COMPONENT

export default List;
