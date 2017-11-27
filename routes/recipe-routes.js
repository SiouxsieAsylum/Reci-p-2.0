const express = require('express');
const recipeRoutes = express.Router();
const recipeControllers = require('../controllers/recipe-controllers.js');

recipeRoutes.get('/', recipeControllers.index);
recipeRoutes.get('/:id', recipeControllers.show);
recipeRoutes.delete('/:recipe_id',recipeControllers.removeUserRecipe)

// new recipe and ingredients in new recipe
recipeRoutes.post('/new',recipeControllers.createRecipe)
recipeRoutes.post('/new/:recipe_id',recipeControllers.addIngredientsToNewRecipe)

// add and remove ingredients
recipeRoutes.post('edit/:recipe_id/:ingredient_id',recipeControllers.addIngredientsToNewRecipe)
recipeRoutes.delete('edit/:recipe_id/:ingredient_id',recipeControllers.removeIngredient)

// get the edit
// editing ingredients will likely be its own endpoint
// recipeRoutes.get('/:id/edit')

// process the edit
// recipeRoutes.put('/:id',recipeControllers.update)

recipeRoutes.post('/:recipe_id/:shoppingList_id', recipeControllers.addRecipeToShopping);

recipeRoutes.delete('/:id',recipeControllers.delete)

module.exports = recipeRoutes;

