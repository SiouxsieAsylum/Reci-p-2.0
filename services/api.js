let apiReturn = require('../fixtures/recipe.js');
let api = {}

api.getRecipes = () => {
// function getRecipes(){
  return Promise.resolve(apiReturn);
}


// module.exports = getRecipes;
module.exports = api;
