const express = require('express');
const listController = require('../controllers/list-controllers');
const authHelpers = require('../services/auth/auth-helpers');
const listRouter = express.Router();

module.exports = listRouter;
