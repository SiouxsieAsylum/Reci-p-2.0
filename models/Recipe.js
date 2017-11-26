const db = require('../db/config');


const Recipe ={};

Recipe.findAll = () => {
  return db.query('SELECT * FROM recipes');
}

Recipe.create = recipe => {
 return db.one(`INSERT INTO recipes (name,image,serving_size) VALUES ($1,$2,$3) RETURNING *`,[recipe.title,recipe.image,recipe.serving_size]);
}

Recipe.addIngredients = recipe => {

  const query = `INSERT INTO ingredients (name) VALUES ${recipe} RETURNING *`
  return db.many(query)

}

Recipe.createJoinList = recipeData => {

  const query = `INSERT INTO ingredient_lists (recipe_id,ingredient_id,amount,unit) VALUES ${recipeData} RETURNING *`
  return db.many(query)


}
// Recipe.addIngredients = recipe => {
//   for (let ingredient of recipe.ingredients){
//       db.none(`INSERT INTO ingredients (name) VALUES ($1)`,[ingredient.text])
//   }
// }



Recipe.findById = id => {
  return db.one(`SELECT * FROM recipes WHERE id = $1`, [id]);
}

Recipe.findAll = () => {
  return db.query(`SELECT * FROM recipes`, [id]);
}

// Recipe.update = (recipe, id) => {
//   db.none(`UPDATE recipes SET name = $1, serving_size = $2`,[recipe.name,recipe.yeild])
//   .then(recipe => {
//     for (let ingredient of recipe.ingredients){
//     db.none(`UPDATE ingredients SET name = $1`,[ingredient.text])
//     }
//   })
//   .then((recipe,ingredients) =>{
//     for (let ingredient of ingredients)
//       db.none(`UPDATE ingredient_list SET recipe_id = $1, ingredient_id = $2`, [recipe.id,ingredient.id])
//   })
//   .then((recipe) => {
//     return db.query(`SELECT * FROM recipes JOIN ingredient_list ON ingredient_lists.recipe_id = recipe.id JOIN ingredients ON ingredients.id = ingredient_lists.ingredient_id WHERE recipe.id = $1`, [recipe.id])
//   })
// }

// Recipe.delete = id => {
//   db.none(`DELETE from ingredient_lists WHERE recipe_id = $1`);
//   .then(id => {
//      db.none(`DELETE from recipes WHERE id = $1`);
//   })
// }

// Recipe.addRecipeToShopping = (shoppingList_id, recipe_id) => {
//   return db.one(`
//     INSERT INTO shopping_lists
//     (id, recipe_id)
//     VALUES($1, $2)
//     RETURNING *
//     `, [shoppingList_id, recipe_id ]);
// }

module.exports = Recipe;
