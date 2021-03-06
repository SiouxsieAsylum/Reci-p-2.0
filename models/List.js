const db = require('../db/config');
const List = {};


List.create = (userId,name) => {
  return db.one(`INSERT INTO user_lists (user_id, name) VALUES ($1,$2) RETURNING *`,[userId,name])
}

List.findNameById = id => {
  return db.oneOrNone(`
    SELECT name FROM user_lists WHERE list_id = ($1)`, [id]);
}

List.findById = id => {
  return db.query(`
    SELECT ingredients.name,ingredient_lists.amount, ingredient_lists.unit
    FROM ingredient_lists
    JOIN ingredients ON ingredients.id = ingredient_lists.ingredient_id
    JOIN recipes ON recipes.id = ingredient_lists.recipe_id
    JOIN shopping_lists on recipes.id = shopping_lists.recipe_id
    WHERE shopping_lists.id = $1;`, [id]);
}

List.findNames = id => {
  return db.manyOrNone(
    `SELECT shopping_lists.recipe_added, recipes.name, recipes.id
    FROM recipes JOIN shopping_lists ON recipes.id = shopping_lists.recipe_id
    WHERE shopping_lists.id = ($1)
    `, [id]
  )
}

List.findAll = (userId) => {
  return db.query(`SELECT * FROM user_lists WHERE user_id = $1 `, [userId]);
}

List.update = (list, id) => {

}

List.deleteRecipe = (recipe_added) => {
  return db.none(`DELETE from shopping_lists WHERE recipe_added = $1`, [recipe_added])
}

List.delete = id => {
  db.none(`DELETE from shopping_lists WHERE id = $1`, [id]);
}


module.exports = List;
