const express = require('express');
const listController = require('../controllers/list-controllers');
const authHelpers = require('../services/auth/auth-helpers');
const listRouter = express.Router();

listRouter.get('/', listController.index)
listRouter.get('/:id', listController.show, listController.showNames)
listRouter.post('/', listController.create)
listRouter.put('/:id', listController.update)
listRouter.delete('/:id',listController.delete)

module.exports = listRouter;
