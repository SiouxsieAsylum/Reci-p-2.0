import React, {Component} from 'react';
import IngredientForm from './IngredientForm';
import EditForm from './EditForm'

function Single(props){

  function deleteIngredient(ingredient_id){
  fetch(`api/recipe/${props.recipeInfo.id}/${ingredient_id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      props.getSingleRecipe(props.recipeInfo.id)
    })
  }


  // render(){
    return(
      <div className="recipe-single">
        <h3>{props.recipeInfo.name}</h3><h3>Servings: {props.recipeInfo.serving_size}</h3>
        <div className="single-recipe-pic" style={{backgroundImage: `url(${props.recipeInfo.image})`}}></div>
        <button onClick={() => props.setEdit}>Edit</button>
        <ul className='recipe-ingredients'>
        {props.ingredients.map(ingredient => {
          return (<li key={ingredient.id} className='recipe-ingredient'>
            {ingredient.amount} {ingredient.unit} {ingredient.name}
          {props.recipeInfo.created_by === props.userid && (
            <button onClick={() => deleteIngredient(ingredient.id)}>Delete Me</button>
            )}
          </li>)
        })}
      </ul>

      {this.recipeInfo.created_by === this.props.userid && (
      <IngredientForm
        getSingleRecipe={props.getSingleRecipe}
        recipe={props.recipeInfo.id}
      />
        )}
    </div>
    )
  // }


}

class RecipeSingle extends Component{
  constructor(props){
    // super props when defining props variables
    super(props);
    this.state ={
      edit:false
    }
    this.recipeInfo = this.props.apiSingle[0];
    this.ingredients = this.props.apiSingle[1];
    this.setEdit = this.setEdit.bind(this)
    this.setShow = this.setShow.bind(this)
  }

  setEdit(){
    this.setState({
      edit:true
    })
  }

  setShow(){
    this.setState({
      edit:false
    })
  }

render(){
    if (this.state.edit){
      return(<EditForm
        recipeInfo={this.recipeInfo}
        getSingleRecipe={this.props.getSingleRecipe}
        setShow={this.setShow}
      />)
    } else {
      return(<Single
        recipeInfo={this.recipeInfo}
        ingredients={this.ingredients}
        userid={this.props.userid}
        getSingleRecipe={this.props.getSingleRecipe}
        setEdit={this.setEdit}
      />)
    }
  }
}

export default RecipeSingle;
