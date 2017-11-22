let apiReturn = require('../fixtures/recipe.js');
let api = {}

//TODO initial fetch request
api.getRecipes = () => {
fetch('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=8',
  {headers:
    {
      "X-Mashape-Key":process.env.API_KEY,
      // key to be saved in .env
      // "X-Mashape-Key":"oInlAorEARmshxdRrgOy32h2is6op1TwbVujsnCqaHpgnnuNeZ",
  "Accept":"application/json"}})
.then(res => res.json())
.then(json => {
  // other options for returns
  // return (JSON.stringify(json.recipes))
  // return json;
  console.log(JSON.stringify(json.recipes))
  return json.recipes;
})
.catch(err => {
  console.log(err);
})

}
module.exports = api;
