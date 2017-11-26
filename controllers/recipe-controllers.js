const Recipe = require('../models/Recipe');

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
  Recipe.addRecipeToShopping(parseInt(req.params.shoppingList_id), req.body.recipe_id )
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
RecipeController.update = (req,res,next) => {

}

RecipeController.delete = (req,res,next) => {
  Recipe.delete(req.params.id)
  .then(() => {
    res.redirect('/')
  })
  .catch(next)
}



module.exports = RecipeController;




















