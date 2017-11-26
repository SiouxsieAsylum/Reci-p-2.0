const db = require('../db/config');
const List = {};

List.create = (list) => {
  return db.one(`INSERT INTO user_lists (user_id, name) VALUES ($1,$2) RETURNING *`,[list.user_id, list.name])
}

List.findById = id => {
  return db.one(`SELECT * FROM shopping_lists WHERE id = $1`, [id]);
}

List.findAll = (userId) => {
  return db.query(`SELECT * FROM user_lists WHERE user_id = $1 `, [userId]);
}

List.update = (list, id) => {

}

List.delete = id => {
  db.none(`DELETE from shopping_lists WHERE id = $1`);
}


module.exports = List;
