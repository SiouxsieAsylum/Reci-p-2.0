const db = require('../db/config');

const Recipe ={};

// ~~~~~~~~~~~~~~~~~~~~~~~Typical CRUD~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Recipe.findAll = () => {
  return db.query('SELECT * FROM recipes');
}

// created from api
Recipe.apiCreate = recipe => {
 return db.one(`INSERT INTO recipes (name,image,serving_size) VALUES ($1,$2,$3) RETURNING *`,[recipe.title,recipe.image,recipe.serving_size]);
}

// add ingredients from api
Recipe.addIngredients = recipe => {
  const query = `INSERT INTO ingredients (name) VALUES ${recipe} RETURNING *`
  return db.many(query)
}

// created by user
Recipe.inputCreate = recipe => {
 return db.one(`INSERT INTO recipes (name,image,serving_size,created_by) VALUES ($1,$2,$3,$4) RETURNING *`,[recipe.name,recipe.image,recipe.serving_size,recipe.created_by]);
}

// ingredients added by user
Recipe.newRecipeIngredients = ingred => {
  return db.one(`INSERT INTO ingredients (name) VALUES ($1) RETURNING *`,[ingred.name])
}

// creates join between recipies and their ingredients
Recipe.createJoinList = recipeData => {
  const query = `INSERT INTO ingredient_lists (recipe_id,ingredient_id,amount,unit) VALUES ${recipeData} RETURNING *`
  return db.many(query)
}

// creates a join between recipes chosen/made by user
Recipe.addUserRecipe = (userId,recipe_id) => {
  return db.one(`INSERT INTO user_recipes (user_id,recipe_id) VALUES ($1,$2) RETURNING *`, [userId,recipe_id])
}

// remove from user recipies
Recipe.removeUserRecipe = (userId,recipe_id) => {
  return db.none(`DELETE FROM user_recipes WHERE userId = $1 AND recipe_id = $2`,[userId,recipe_id])
}

// remove ingredient from recipe
Recipe.removeIngredient = (ingredient,recipe) => {
  return db.none(`DELETE FROM ingredient_lists WHERE ingredient_lists.recipe_id=$1 AND ingredient_lists.ingredient_id = $2`,[recipe,ingredient])
}

// findByID
Recipe.findRecipe = id => {
  return db.one(`SELECT * FROM recipes WHERE id = $1`,[id])
}

// find all recipes in database
Recipe.findAllRecipes = () => {
  return db.query(`SELECT * from recipes`);
}

// return all ingredients for a recipe
Recipe.findIngredients = id => {
  return db.query(`SELECT ingredients.id, ingredients.name, ingredient_lists.amount, ingredient_lists.unit FROM ingredients JOIN ingredient_lists ON ingredient_lists.ingredient_id = ingredients.id WHERE ingredient_lists.recipe_id = $1`,[id])
}

//Update name, etc of recipe
Recipe.update = (recipe,id) => {
  return db.one(`UPDATE recipes SET name = $1, serving_size=$2,image=$3 WHERE id=$4 RETURNING *`,[recipe.name,recipe.serving_size,recipe.image,id])
}

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

Recipe.duplicateRecipe = (recipe,userId) => {
  return db.one(`INSERT INTO recipes (name,serving_size,image,created_by) SELECT name, serving_size, image, $1 FROM recipes where id = $2;`,[userId,recipe.id])
}

Recipe.duplicateIngredientList = (passedRecipe,originalRecipe) => {
  return db.query(`INSERT INTO ingredient_lists (recipe_id,ingredient_id,amount,unit) SELECT $1,ingredient_id,amount,unit FROM ingredient_lists WHERE recipe_id = $2;`,[passedRecipe.id,originalRecipe.id])
}

//INSERT INTO recipes (name,serving_size,image,created_by) SELECT name, serving_size, image, ${userId} FROM recipes where id = $1;
// INSERT INTO ingredient_lists (recipe_id,ingredient_id,amount,unit) SELECT 10,ingredient_id,amount,unit FROM ingredient_lists WHERE recipe_id = $1;

module.exports = Recipe;
