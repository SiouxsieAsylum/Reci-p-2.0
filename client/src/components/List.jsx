import React, { Component } from 'react';
import SingleList from './SingleList'

const dummyData = require('./dummyJSON') // PLACEHOLDER DATA

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
        {dummyData.map(item => {
          return <SingleList ingredient={item.recipe}/>

        })}
      </div>
    )

  }//end of render

}//end of LIST COMPONENT

export default List;
