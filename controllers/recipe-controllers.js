const Recipe = require('../models/Recipe');

const RecipeController = {};

RecipeController.index = (req, res, next) => {
  Recipe.findAll()
    .then(recipes => {
      res.json({
        message: 'ok',
        data:{recipes};
      });
  }).catch(next)
};


const api = require('../services/api')
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
