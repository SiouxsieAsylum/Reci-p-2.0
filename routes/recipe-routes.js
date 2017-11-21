const express = require('express');

const recipeRoutes = express.Router();

const recipeControllers = require('../controllers/recipe-controllers.js');

recipeRoutes.get('/', recipeControllers.index);


module.exports = recipeRoutes;

