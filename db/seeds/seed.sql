INSERT INTO users(username)
VALUES('default');

INSERT INTO recipes(name, serving_size)
VALUES('default_recipe', 4);

INSERT INTO user_recipes(user_id, recipe_id)
VALUES(1, 1);

INSERT INTO user_lists(user_id, name)
VALUES(1, 'default_list');
