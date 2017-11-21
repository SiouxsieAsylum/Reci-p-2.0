const express = require('express');

const recipeRoutes = express.Router();

const recipeControllers = require('../controllers/recipe-controllers.js');

recipeRoutes.get('/', recipeControllers.index);

recipeRoutes.post('/:shoppingList_id', recipeControllers.create);



module.exports = recipeRoutes;

