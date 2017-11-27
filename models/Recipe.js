const db = require('../db/config');


const Recipe ={};

Recipe.findAll = () => {
  return db.query('SELECT * FROM recipes');
}

Recipe.apiCreate = recipe => {
 return db.one(`INSERT INTO recipes (name,image,serving_size) VALUES ($1,$2,$3) RETURNING *`,[recipe.title,recipe.image,recipe.serving_size]);
}

Recipe.inputCreate = recipe => {
 return db.one(`INSERT INTO recipes (name,image,serving_size,created_by) VALUES ($1,$2,$3,$4) RETURNING *`,[recipe.name,recipe.image,recipe.serving_size,recipe.created_by]);
}

Recipe.addIngredients = recipe => {
  const query = `INSERT INTO ingredients (name) VALUES ${recipe} RETURNING *`
  return db.many(query)
}

Recipe.newRecipeIngredients = ingred => {
  return db.one(`INSERT INTO ingredients (name) VALUES ($1) RETURNING *`,[ingred.name])
}

Recipe.addUserRecipe = (userId,recipe_id) => {
  return db.one(`INSERT INTO user_recipes (user_id,recipe_id) VALUES ($1,$2) RETURNING *`, [userId,recipe_id])
}

// remove from user recipies
Recipe.removeUserRecipe = (userId,recipe_id) => {
  return db.none(`DELETE FROM user_recipes WHERE userId = $1 AND recipe_id = $2`,[userId,recipe_id])
}

// // remove ingredient from recipe
Recipe.removeIngredient = (ingredient,recipe) => {
  return db.none(`DELETE FROM ingredient_lists WHERE ingredient_lists.ingredient_id = $1 AND ingredient_lists.recipe_id=$2`,[ingredient.id,recipe.id])
}

Recipe.createJoinList = recipeData => {
  const query = `INSERT INTO ingredient_lists (recipe_id,ingredient_id,amount,unit) VALUES ${recipeData} RETURNING *`
  return db.many(query)
}

Recipe.findRecipe = id => {
  return db.one(`SELECT * FROM recipes WHERE id = $1`,[id])
}

Recipe.findAllRecipes = () => {
  return db.query(`SELECT * from recipes`);
}

Recipe.findIngredients = id => {
  return db.query(`SELECT ingredients.id, ingredients.name, ingredient_lists.amount, ingredient_lists.unit FROM ingredients JOIN ingredient_lists ON ingredient_lists.ingredient_id = ingredients.id WHERE ingredient_lists.recipe_id = $1`,[id])
}

Recipe.update = (recipe,id) => {
  return db.one(`UPDATE recipes SET name = $1, serving_size=$2,image=$3 WHERE id=$4 RETURNING *`,[recipe.name,recipe.serving_size,recipe.image,id])
}

// in order to delete all ingredients associated with the recipe, we will need to write a query for each ingredient.
// DELETE FROM ingredients USING ingredient_lists WHERE ingredient_lists.recipe_id = 6 AND ingredients.id = 55;
Recipe.delete = (id) => {
  return db.none(`
                  UPDATE ingredient_lists SET ingredient_id = NULL, amount = NULL, unit=NULL WHERE recipe_id = $1;
                  DELETE FROM recipes WHERE id = $1;
                  `,[id])
}

Recipe.addRecipeToShopping = (shoppingList_id, recipe_id) => {
  return db.one(`
    INSERT INTO shopping_lists
    (id, recipe_id)
    VALUES($1, $2)
    RETURNING *
    `, [shoppingList_id, recipe_id ]);
}

module.exports = Recipe;
