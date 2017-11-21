const Recipe = require('../models/Recipe');

const RecipeController = {};

RecipeController.index = (req, res, next) => {
  Recipe.findAll()
    .then(recipes => {
      res.json({
        message: 'ok',
        data:{ recipes }
      });
  }).catch(next)
};

RecipeController.show = (req, res, next) => {
  Recipe.findById(req.params.id)
  .then(recipe => {
    res.json({
      message: 'ok',
      data: {recipe},
    });
  }).catch(next);
};



module.exports = RecipeController;
