const Recipe = require('../models/Recipe');

const RecipeController = {};

RecipeController.index = (req, res, next) => {
  Recipe.findAll()
  .then(movies => {
    res.json({
      message: 'ok',
      data:{[id, name]};
    });
  }).catch(next)
};


module.exports = RecipeController
