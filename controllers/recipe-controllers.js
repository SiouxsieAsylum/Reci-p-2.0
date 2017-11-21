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
      return {name: food.title, image: food.image};
    })
    return recipeData;
  })
  .then(recipeData => {
    return Recipe.create(recipeData);
  })
  .catch(err => {
    console.log(err)
  })
}

recipeApiController.addRecipes();

module.exports = recipeApiController;
