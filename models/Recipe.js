const db = require('../db/config');


const Recipe ={};

Recipe.findAll = () => {
  return db.query('SELECT * FROM Recipe');
}

Recipe.create = recipe => {

  db.none(`INSERT INTO recipes (name,serving_size) VALUES ($1,$2)`,[recipe.name,recipe.yeild])
  .then(recipe => {
    for (let ingredient of recipe.ingredients){
    db.none(`INSERT INTO ingredients (name) VALUES ($1)`,[ingredient.text])
    }
  })
  .then((recipe,ingredients) =>{
    for (let ingredient of ingredients)
      db.none(`INSERT INTO ingredient_list(recipe_id,ingredient_id) VALUES ($1,$2)`, [recipe.id,ingredient.id])
  })
  .then(recipe => {
    return db.query(`SELECT * FROM recipes JOIN ingredient_list ON ingredient_lists.recipe_id = recipe.id JOIN ingredients ON ingredients.id = ingredient_lists.ingredient_id WHERE recipe.id = $1`, [recipe.id])
  })
}

Recipe.findById = id => {
  return db.one(`SELECT * FROM recipes WHERE id = $1`, [id]);
}

Recipe.findAll = () => {
  return db.query(`SELECT * FROM recipes`, [id]);
}

Recipe.update = (recipe, id) => {
  db.none(`UPDATE recipes SET name = $1, serving_size = $2`,[recipe.name,recipe.yeild])
  .then(recipe => {
    for (let ingredient of recipe.ingredients){
    db.none(`UPDATE ingredients SET name = $1`,[ingredient.text])
    }
  })
  .then((recipe,ingredients) =>{
    for (let ingredient of ingredients)
      db.none(`UPDATE ingredient_list SET recipe_id = $1, ingredient_id = $2`, [recipe.id,ingredient.id])
  })
  .then((recipe) => {
    return db.query(`SELECT * FROM recipes JOIN ingredient_list ON ingredient_lists.recipe_id = recipe.id JOIN ingredients ON ingredients.id = ingredient_lists.ingredient_id WHERE recipe.id = $1`, [recipe.id])
  })
}

Recipe.delete = id => {
  db.none(`DELETE from ingredient_lists WHERE recipe_id = $1`);
  .then(id => {
     db.none(`DELETE from recipes WHERE id = $1`);
  })
}


>>>>>>> submitted for testing
module.exports = Recipe;
