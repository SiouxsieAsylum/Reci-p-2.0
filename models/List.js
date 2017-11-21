const db = require('../db/config');
const List = {};

List.create = (userId,list) => {
  return db.one(`INSERT INTO user_lists (user_id, list_id, name) VALUES ($1,$2,$3)`)
}

List.findById = id => {
  return db.one(`SELECT * FROM shopping_lists WHERE id = $1`, [id]);
}

List.findAll = () => {
  return db.query(`SELECT * FROM shopping_lists`, [id]);
}

List.update = (list, id) => {

}

List.delete = id => {
  db.none(`DELETE from shopping_lists WHERE id = $1`);
}


module.exports = List;
