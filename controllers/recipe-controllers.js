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

RecipeController.addRecipeToShopping = (shoppingList_id, recipe_id, next) => {
  return Recipe.addRecipeToShopping(shoppingList_id, recipe_id)

};

RecipeController.duplicateRecipeForShoppingList = (req,res,next) => {
  Recipe.duplicateRecipe(req.params.recipe_id,req.body.id)
  .then(recipe => {
    Recipe.duplicateIngredientList(recipe.id,req.params.recipe_id)
    .then(ingredientList => {
      Recipe.addUserRecipe(req.body.id,recipe.id)
      .then( userLink => {
        RecipeController.addRecipeToShopping(req.params.shoppingList_id,recipe.id)
        .then(list => {
          res.json({
            message: 'added to list',
            data:({ recipe,list })
          })
        })
      })
      .catch(next)
    })
    .catch(next)
  })
  .catch(next)
}



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

RecipeController.update = (req,res,next) => {
  Recipe.update({
    name: req.body.title,
    image: req.body.image,
    serving_size: req.body.serving_size
  },req.params.recipe_id)
  .then(recipe => {
    res.json({
      message: 'recipe updated',
      data: { recipe }
    })
  })
  .catch(next)
}

RecipeController.apiCreateRecipe = (req,res,next) => {
  Recipe.apiCreate({
    name: req.body.title,
    image: req.body.image,
    serving_size: req.body.serving_size
  })
  .then(recipe => {
    Recipe.addUserRecipe(req.user.id,recipe.id)
    .then(userRecipe => {
      res.json({
        message: 'recipe created',
        data: {recipe}
      })
    })
  })
  .catch(next)
}

RecipeController.userCreateRecipe = (req,res,next) => {
  Recipe.inputCreate({
    name: req.body.title,
    image: req.body.image,
    serving_size: req.body.serving_size,
    created_by: req.body.created_by
  })
  .then(recipe => {
    Recipe.addUserRecipe(req.body.created_by,recipe.id)
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
    // will I be able to get that request body in the nested promise?
    Recipe.createJoinList("\(" +
      req.params.recipe_id
      + ","+
      ingredient.id
      + ","+
      req.body.amount
      + ",\'"+
      req.body.unit +
    "\'\)" )
    .then(join => {
      res.json({
        message: 'recipe created',
        data: {ingredient,join}
      })
    })
  })
  .catch(next)
}

RecipeController.removeUserRecipe = (req,res,next) => {
  Recipe.removeUserRecipe(req.user.id,req.params.recipe_id)
  .then(recipe => {
    res.json({
      message: 'user recipe deleted',
      data: recipe
    })
  })
  .catch(next)
}


// remove ingredient from open recipe
RecipeController.removeIngredient = (req,res,next) => {
  Recipe.removeIngredient(req.params.ingredient_id,req.params.recipe_id,)
  .then(recipe => {
    res.json({
      message:'ingredient deleted'
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




















