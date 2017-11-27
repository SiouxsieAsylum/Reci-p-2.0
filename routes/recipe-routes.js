const express = require('express');
const recipeRoutes = express.Router();
const recipeControllers = require('../controllers/recipe-controllers.js');

recipeRoutes.get('/', recipeControllers.index);

recipeRoutes.get('/:id', recipeControllers.show);

// recipeRoutes.get('/new',)
recipeRoutes.post('/new',recipeControllers.createRecipe)
recipeRoutes.post('/new/:id',recipeControllers.addIngredientsToNewRecipe)

// get the edit
// editing ingredients will likely be its own endpoint
// recipeRoutes.get('/:id/edit')

// process the edit
// recipeRoutes.put('/:id',recipeControllers.update)

recipeRoutes.post('/:recipe_id/:shoppingList_id', recipeControllers.addRecipeToShopping);

recipeRoutes.delete('/:id',recipeControllers.delete)

module.exports = recipeRoutes;

