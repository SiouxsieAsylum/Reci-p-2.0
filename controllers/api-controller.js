const api = require('../services/api')
const Recipe = require('../models/Recipe')
const recipeApiController = {};

recipeApiController.addRecipes = () => {
  api.getRecipes()
  .then((res) => {
    const recipeData = res.map(food => {
      return {title: food.title, image: food.image, serving_size: food.servings};
    })
    return recipeData;
  })
  .then(recipeData => {
      // console.log(recipeData[0])
    return Recipe.create(recipeData[0]);
  })
  .catch(err => {
    console.log(err)
  })
}

module.exports = recipeApiController;
