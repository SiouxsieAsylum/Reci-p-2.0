const express = require('express');
const recipeRoutes = express.Router();
const recipeControllers = require('../controllers/recipe-controllers.js');

recipeRoutes.get('/', recipeControllers.index);
recipeRoutes.get('/:id', recipeControllers.show);
recipeRoutes.post('/:recipe_id',recipeControllers.addIngredientsToNewRecipe)
recipeRoutes.delete('/:recipe_id',recipeControllers.removeUserRecipe)
recipeRoutes.delete('edit/:recipe_id/:ingredient_id',recipeControllers.removeIngredient)

// new recipe and ingredients in new recipe
recipeRoutes.post('/',recipeControllers.userCreateRecipe)
// recipeRoutes.post('/new/:recipe_id',recipeControllers.addIngredientsToNewRecipe)

// add and remove ingredients

recipeRoutes.post('/:recipe_id/:shoppingList_id', recipeControllers.addRecipeToShopping);

recipeRoutes.delete('/:id',recipeControllers.delete)

module.exports = recipeRoutes;

