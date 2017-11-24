const api = require('../services/api')
const Recipe = require('../models/Recipe')
const fetch = require('node-fetch')
const recipeApiController = {};

recipeApiController.getDictionary = (res) => {
  const dictionary = {}
  res.map(food => {
    food.extendedIngredients.map(ingred => {
      dictionary[ingred.name] = ingred
    })
  })
  return dictionary;
}

//adds "("")" all ingredient names into a string
recipeApiController.sql = (ingredientData) => {
  let string = "";
  for (let i = 0; i < ingredientData.length; i++){
    if (i + 1 == ingredientData.length){
      string = string + "(\'" + ingredientData[i].name + "\')"
    } else {
      string = string + "(\'" + ingredientData[i].name + "\'),"
    }
  }
  // console.log(string);
  return string;
}

recipeApiController.addIngredients = (res) => {
  let ingredientArray = []
  const ingredientData = res.map(food => {
    return food.extendedIngredients.map(ingred => {
      return {name: ingred.name}
    })
  })
  // TODO: pass all ingredients
  for(let ingredient of ingredientData){
    ingredientArray.push(Recipe.addIngredients(recipeApiController.sql(ingredient)));
  }
  return Promise.all(ingredientArray)
}

recipeApiController.createRecipe = (res) => {
  let recipeArray = []
  const recipeData = res.map(food => {
    return {title: food.title, image: food.image, serving_size: food.servings};
    })
  // let recipe = {title:res.title, image: res.image, serving_size:res.servings}
  for (let recipe of recipeData){
    recipeArray.push(Recipe.create(recipe))
  }
  return Promise.all(recipeArray)
}

// TODO: make function to create master dictionary object


recipeApiController.addRecipes = () => {
  fetch('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=8',
  {headers:
    {
      "X-Mashape-Key":process.env.API_KEY,
      "Accept":"application/json"}})
  .then(res => res.json())
  .then((json) => {
    recipes = json.recipes;

    Promise.all([recipeApiController.createRecipe(recipes),recipeApiController.addIngredients(recipes)])
    .then(allData => {
      let recipeData = Object.values(allData[0]);
      let ingredientData = Object.values(allData[1]);
      let allDataArray = []

      for (let i = 0; i < recipeData.length; i++){
        allDataArray.push([recipeData[i],ingredientData[i]])
      }

      allDataArray.map((food,j) => {
        Object.values(food[1]).map((ingred,k) => {
          Recipe.createJoinList("\(" + food[0].id +","+ ingred.id+","+parseInt(JSON.stringify(recipes[j].extendedIngredients[k].amount))+","+"\'"+recipes[j].extendedIngredients[k].unitLong+"\'"+"\)")
        })
      })

    }).catch(err => {
          console.log(err)
    })
  })
  .catch(err => {
    console.log(err)
  })
}


module.exports = recipeApiController;
