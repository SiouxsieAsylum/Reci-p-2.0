const express = require('express');
const listController = require('../controllers/list-controllers');
const authHelpers = require('../services/auth/auth-helpers');
const listRouter = express.Router();

listRouter.get('/',listController.index)
listRouter.get('/:id',listController.show)

module.exports = listRouter;
