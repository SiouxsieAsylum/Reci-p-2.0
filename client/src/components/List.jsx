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
      <div className="list-container">
        <p>List Component</p>
      </div>
    )

  }//end of render

}//end of LIST COMPONENT

export default List;
