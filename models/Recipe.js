const db = require('../db/config');

const Recipe ={};

Recipe.findAll = () => {
  return db.query('SELECT * FROM Recipe');
}

module.exports = Recipe;
