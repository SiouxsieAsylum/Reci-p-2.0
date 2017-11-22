let apiReturn = require('../fixtures/recipe.js');
let api = {}

//TODO initial fetch request
api.getRecipes = () => {
// function getRecipes(){
  return Promise.resolve(apiReturn);
}

// api.grabExtended = (stuff) => {
//   const dictionary = {}
//   for (let s of stuff) {
//     dictionary[s] =
//   }
// }

// module.exports = getRecipes;
module.exports = api;
