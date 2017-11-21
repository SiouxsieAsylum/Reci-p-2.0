
CREATE TABLE IF NOT EXISTS recipes(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  serving_size INTEGER,
  image VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS ingredients(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS ingredient_lists(
  id SERIAL PRIMARY KEY,
  recipe_id INTEGER REFERENCES recipes,
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
  id INTEGER REFERENCES user_lists,
  recipe_id INTEGER REFERENCES recipes
);

--TEST QUERIES
--create new shopping lists
--INSERT INTO user_lists (user_id,name) values (user.id,list.name)

--to add all ingredients from a recipe to a shopping list
--INSERT INTO recipes (name,serving_size) values (recipe.name,recipe.yeild);
--INSERT INTO ingredients_list(recipe_id,ingredient_id,amount,unit) (SELECT id from RECIPES ORDER BY id DESC LIMIT 1),[sql loop though and create # of new primary keys],[parseInt(ingredient '^\S*\s')],[ingredient('^\s*\s')]
--INSERT INTO ingredients(name) values (recipe.ingredients[0][loop?])
--INSERT INTO shopping_lists (user_id,ingredient_id,amount,unit) SELECT user_recipes.user_id,ingredients.id,ingredient_lists.amount, ingredient_lists.unit FROM ingredient_lists JOIN user_recipes ON ingredient_lists.recipe_id = user_recipes.recipe_id JOIN ingredients ON ingredients.id = ingredient_lists.ingredient_id WHERE ingredient_lists.recipe_id = 1;

--to add an ingredient to a shopping list
--https://stackoverflow.com/questions/20971680/sql-server-insert-if-not-exist except if exists, select the thing.

--multiple queries into one transaction
