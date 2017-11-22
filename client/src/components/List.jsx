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
        <h3 className="soft-title">Ingredients list</h3>
        {dummyData.map((item,index) => {
          return <SingleList key={index} ingredient={item.recipe}/>
        })}
        <form className="ingredient-form">
          <input type="text" name="addIngredient" value={this.state.addIngredientValue} placeholder="Add ingredient"/>
          <input type ="submit" value="Add" />
        </form>
      </div>
    )

  }//end of render

}//end of LIST COMPONENT

export default List;
