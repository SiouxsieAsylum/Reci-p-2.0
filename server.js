//----------------------Dependencies----------------------------//
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('dotenv').config();

//Auth dependencies//
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');


//---------------------Config App--------------------------------//
const app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('Server connected to PORT: ', PORT);
});

//---------------------Middleware--------------------------------//
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


//---------------------Routes--------------------------------//
app.get('/', (req, res) => {
  res.send('Hello World');
});

const recipeController = require('./controllers/api-controller');
// recipeController.addRecipes();


const authRouter = require('./routes/auth-routes');
app.use('/api/auth', authRouter);
// const listRouter = require('./routes/list-routes');
// app.use('/api/list', listRouter);
const recipeRouter = require('./routes/recipe-routes');
app.use('/api/recipe', recipeRouter);

app.use('*', (req, res) => {
  res.status(400).json({
    message: 'not found',
  });
});

app.use((err, req, res, next) =>{
  console.log(err);
  res.status(500).json({
    error: err,
    message: err.message,
  });
});
