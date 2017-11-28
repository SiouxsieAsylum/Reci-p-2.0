CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  password_hash TEXT
);

CREATE TABLE IF NOT EXISTS recipes(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  serving_size INTEGER,
  image VARCHAR(255),
  created_by INTEGER REFERENCES users
);

CREATE TABLE IF NOT EXISTS ingredients(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS ingredient_lists(
  id SERIAL PRIMARY KEY,
  recipe_id INTEGER REFERENCES recipes,
  ingredient_id INTEGER REFERENCES ingredients,
  amount FLOAT,
  unit VARCHAR(255)
);

CREATE table IF NOT EXISTS user_recipes(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  recipe_id INTEGER REFERENCES recipes,
  favorited BOOLEAN
);

CREATE TABLE IF NOT EXISTS user_lists(
  user_id INTEGER REFERENCES users,
  list_id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS shopping_lists(
  recipe_added SERIAL PRIMARY KEY,
  id INTEGER REFERENCES user_lists,
  recipe_id INTEGER REFERENCES recipes
);

