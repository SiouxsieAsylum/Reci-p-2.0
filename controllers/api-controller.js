const api = require('../services/api')
const Recipe = require('../models/Recipe')
const recipeApiController = {};

recipeApiController.addIngredients = (res) => {
  const ingredientData = res.map(food => {
    // return {name: food.extendedIngredients.name}
    return food.extendedIngredients.map(ingred => {
      return {name: ingred.name}
    })
  })
  // TODO: pass all ingredients
  return Recipe.addIngredients(ingredientData[0]);
}

recipeApiController.createRecipe = (res) => {
  const recipeData = res.map(food => {
    return {title: food.title, image: food.image, serving_size: food.servings};
    })
  return Recipe.create(recipeData[0]);
}

// TODO: make function to create master dictionary object

recipeApiController.addRecipes = () => {
  api.getRecipes()
  .then((res) => {
    const recipePromise = recipeApiController.createRecipe(res);
    const ingredientPromise = recipeApiController.addIngredients(res);
    Promise.all(recipePromise,ingredientPromise)
    .then(allData => {
      console.log(allData, res.extendedIngredients)
    })
    // return ingredientPromise
  })
  // .then(ingredientPromise => {
  //     console.log(ingredientPromise)

  // })
  .catch(err => {
    console.log(err)
  })
}


module.exports = recipeApiController;
