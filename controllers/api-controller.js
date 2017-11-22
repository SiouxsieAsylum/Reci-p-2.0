const api = require('../services/api')
const Recipe = require('../models/Recipe')
const recipeApiController = {};

recipeApiController.getDictionary = (res) => {
  const dictionary = {}
  res.map(food => {
    food.extendedIngredients.map(ingred => {
      dictionary[ingred.name] = ingred
    })
  })
  return dictionary;
}

// if on ingredient promise, ingred
// if on extended ingred. ingred.name
recipeApiController.sql = (ingredientData) => {
  let string = "";
  for (let i = 0; i < ingredientData.length; i++){
    if (i + 1 == ingredientData.length){
      string = string + "(\'" + ingredientData[i].name + "\')"
    } else {
      string = string + "(\'" + ingredientData[i].name + "\'),"
    }
  }
  // console.log(string);
  return string;
}

recipeApiController.addIngredients = (res) => {
  console.log("ingredients")
  const ingredientData = res.map(food => {
    // return {name: food.extendedIngredients.name}
    return food.extendedIngredients.map(ingred => {
      return {name: ingred.name}
    })
  })
  // TODO: pass all ingredients
  return Recipe.addIngredients(recipeApiController.sql(ingredientData[0]));
}

recipeApiController.createRecipe = (res) => {
  console.log("recipe")
  const recipeData = res.map(food => {
    return {title: food.title, image: food.image, serving_size: food.servings};
    })
  return Recipe.create(recipeData[0]);
}

// TODO: make function to create master dictionary object


recipeApiController.addRecipes = () => {
  api.getRecipes()
  .then((res) => {
    // const recipePromise = recipeApiController.createRecipe(res);
    console.log("inbetween")
    // const ingredientPromise = recipeApiController.addIngredients(res);
    console.log("after")
    Promise.all([recipeApiController.createRecipe(res),recipeApiController.addIngredients(res)])
    .then(allData => {
      // res.map(food => {
      const bigJson =
      allData[1].map((food,i) => {
        Recipe.createJoinList("\(" + allData[0].id +","+food.id+","+parseInt(JSON.stringify(res[0].extendedIngredients[i].amount))+","+"\'"+res[0].extendedIngredients[i].unitLong+"\'"+"\)")
      })
    })
    .catch(err => {
      console.log(err)

    })
  })
  // .then(ingredientPromise => {
  //     console.log(ingredientPromise)

  // })
  .catch(err => {
    console.log(err)
  })
}


module.exports = recipeApiController;
