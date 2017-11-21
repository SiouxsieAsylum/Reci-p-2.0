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

RecipeController.create = (req, res, next) => {
  Recipe.create({
    recipe_id: req.body.recipe_id,
    shopppingList_id: req.params.shopppingList_id
  })
  .then(recipe => {
    res.json({
      message: 'ok',
      data: { recipe },
    });
  }).catch(next);
};



module.exports = RecipeController;




















