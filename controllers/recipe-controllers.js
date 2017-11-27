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
      Recipe.addUserRecipe(req.body.id,req.params.recipe_id)
      .then(userlink => {
        res.json({
          message: 'recipe added',
          data: { recipe,userlink }
        });
      })
      .catch(err => {console.log(err)})

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




















