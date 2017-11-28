const express = require('express');
const apiControllers = require('../controllers/api-controller');
const apiRoutes = express.Router();

apiRoutes.get('/', apiControllers.addRecipes)

module.exports = apiRoutes;
