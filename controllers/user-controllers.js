const bcrypt = require('bcryptjs');
const User = require('../models/User');

const usersController = {};

usersController.create = (req, res, next) => {
  debugger;
  console.log(req)

  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    password_digest: hash,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.status(201).json({
        message: 'user sucessfully created',
        auth: true,
        data: {
          user,
        }
      })
    });
  }).catch(next);
}

module.exports = usersController;
