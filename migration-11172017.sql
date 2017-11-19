CREATE TABLE IF NOT EXISTS recipes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  serving_size INTEGER
);

--possibility of unique constraint later on
--https://dba.stackexchange.com/questions/170622/sql-insert-multiple-values-with-unique-constraint
--to avoid errors.


CREATE TABLE IF NOT EXISTS ingredients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  typical_unit VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS ingredient_lists(
  recipe_id INTEGER PRIMARY KEY REFERENCES recipes,
  ingredient_id INTEGER REFERENCES ingredients,
  amount INTEGER,
  unit VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  password_hash TEXT
);

-- list_id will not autoincrement like a serial. When anyone creates a new list, the user_lists list_id will auto increment, and any additions to the shopping_lists will be associated with that list_id
--sample new list query: INSERT INTO user_lists (user_id, name) VALUES (x,y);
--sample add to shopping_lists query: INSERT INTO shopping_lists (id,user_id,ingredient,amount,unit) SELECT list_id, user_id,'apples',5,'ounces' FROM list_join WHERE list_id = 1;
-- ^^ will be  reflected in the model.
--Insert ... select looks like it's going to be our best friend for most of this.
--figure out the joins tomorrow

CREATE table IF NOT EXISTS user_recipies(
  user_id INTEGER PRIMARY KEY REFERENCES users,
  recipe_id INTEGER REFERENCES recipies,
  favorited BOOLEAN,
);

CREATE TABLE IF NOT EXISTS user_lists(
  user_id INTEGER REFERENCES users,
  list_id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS shopping_lists(
  user_id INTEGER REFERENCES users,
  id INTEGER PRIMARY KEY REFERENCES user_lists,
  ingredient_id INTEGER REFERENCES ingredients,
  amount INTEGER,
  unit VARCHAR(255)
);



