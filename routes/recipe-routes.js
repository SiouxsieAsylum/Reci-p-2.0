const express = require('express');

const recipeRoutes = express.Router();

const RecipeController = require('../controllers/recipeControllers.js');

recipeRoutes.get('/', recipeControllers.index);


module.exports = recipeRoutes;

