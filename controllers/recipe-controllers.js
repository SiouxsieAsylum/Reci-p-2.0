const Recipe = require('../models/Recipe');
const apiController = require('./api-controller');
const RecipeController = {};

RecipeController.index = (req, res, next) => {
  Recipe.findAllRecipes()
  .then(recipes => {
    res.json({
      message: 'all recipes found',
      data: { recipes }
    })
  })
  .catch(next)
};

RecipeController.addRecipeToShopping = (req, res, next) => {
  Recipe.addRecipeToShopping(req.params.shoppingList_id, req.params.recipe_id)
    .then(recipe => {
      res.json({
        message: 'recipe added',
        data: { recipe }
      });
    }).catch(next);
};

RecipeController.show = (req,res,next) => {
  Promise.all([Recipe.findRecipe(req.params.id),
    Recipe.findIngredients(req.params.id)])
  .then(recipe => {
    res.json({
      message:'recipe found',
      data: { recipe }
    })
  }).catch(next)
}

// recipe.editIngredient (name)
// recipe.editIngredientList(amount,unit);
// recipe.removeIngredient(removes from ingredient_lists by ingredient.id and recipe_id)
// need to see how the form will be formatted
// two forms: action/recipes (create recipe) action/recipe/:id ingredients
RecipeController.createRecipe = (req,res,next) => {
  Recipe.create({
    name: req.body.name,
    image: req.body.image,
    serving_size: req.body.serving_size
  })
  .then(recipe => {
    Recipe.addUserRecipe({
      user_id: req.user.id,
      recipe_id: recipe.id
    })
    .then(userRecipe => {
      res.json({
        message: 'recipe created',
        data: {recipe}
      })
    })
  })
  .catch(next)
}

RecipeController.addIngredientsToNewRecipe = (req,res,next) => {
  Recipe.newRecipeIngredients({
    name: req.body.name
  })
  .then((ingredient) => {
    Recipe.createJoinList({
      recipe_id: req.params.recipe_id,
      ingredient_id: ingredient.id,
      amount: req.body.amount,
      unit: req.body.unit
    })
    .then(join => {
      res.json({
        message: 'recipe created',
        data: {ingredient,join}
      })
    })
  })
  .catch(next)
}

RecipeController.delete = (req,res,next) => {
  Recipe.delete(req.params.id)
  .then(() => {
    res.json({
      message: 'list deleted'
    })
  })
  .catch(next)
}



module.exports = RecipeController;




















