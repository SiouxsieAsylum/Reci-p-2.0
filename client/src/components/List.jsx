import React, { Component } from 'react';
import SingleList from './SingleList'

const dummyData = require('./dummyJSON') // PLACEHOLDER DATA

console.log('dummy data works from LIST COMPONENT: ', dummyData);


class List extends Component{
  constructor(props){
    super(props)
    this.state={
      apiLoaded:false,
      addIngredientValue: null,
    }
  }

  render(){
    return(
      <div className="list-container">
        <p>List Component</p>
        {dummyData.map(item => {
          return <SingleList ingredient={item.recipe}/>

        })}
        <form>
          <input type="text" name="addIngredient" value={this.state.addIngredientValue} placeholder="Add ingredient"/>
          <input type ="submit" value="Add" />
        </form>
      </div>
    )

  }//end of render

}//end of LIST COMPONENT

export default List;
