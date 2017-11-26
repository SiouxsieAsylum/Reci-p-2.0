INSERT INTO users(username)
VALUES('default');

INSERT INTO recipes(name, serving_size, image)
VALUES('default_recipe', 4 , 'https://i.pinimg.com/originals/d3/a2/82/d3a2827c8cef8cd6c34fbea28d7c424c.jpg');

INSERT INTO user_recipes(user_id, recipe_id)
VALUES(1, 1);

INSERT INTO user_lists(user_id, name)
VALUES(1, 'default_list');
