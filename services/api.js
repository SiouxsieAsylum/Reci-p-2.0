let apiReturn = require('../fixtures/recipe.js');
let api = {}

//TODO initial fetch request
api.getRecipes = () => {
// function getRecipes(){
  return Promise.resolve(apiReturn);
}


// module.exports = getRecipes;
module.exports = api;
