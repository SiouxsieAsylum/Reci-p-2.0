const Recipe = require('../models/Recipe');

const RecipeController = {};

RecipeController.index = (req, res, next) => {
  Recipe.findAll()
    .then(recipes => {
      res.json({
        message: 'ok',
        data:{ recipes },
      });
  }).catch(next)
};

RecipeController.addRecipeToShopping = (req, res, next) => {
  Recipe.addRecipeToShopping(req.body.recipe_id, req.params.shopppingList_id)
    .then(recipe => {
      res.json({
        message: 'ok',
        data: { recipe },
      });
    }).catch(next);
};



module.exports = RecipeController;




















