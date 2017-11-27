const express = require('express');
const listController = require('../controllers/list-controllers');
const authHelpers = require('../services/auth/auth-helpers');
const listRouter = express.Router();

listRouter.get('/', listController.index)
listRouter.get('/names/:id', listController.showNames)
listRouter.get('/:id', listController.show)
listRouter.post('/', listController.create)
listRouter.put('/:id', listController.update)
listRouter.delete('/:id',listController.delete)

module.exports = listRouter;
