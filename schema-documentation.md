SCHEMA DOCUMENTATION

Recipe Shopper has 3 databases: Recipes, Ingredients and Ingredient List.

Recipes DB contains: 
- name
- yield
- id

Ingredients DB contains:
- id
- name 

Ingredients List DB contains:
- recipe_id
- ingredient_id
- amount
- unit


The Recipe db data is populated from the Spoonacular api.  Ingredients db parses the api data into id and ingredient name. Ingredients data is then passed to the Ingredient List db that breaks each individual ingredient down to recipe_id, ingredient_id, amount and unit.   

The shopping list on the front end is populated by Ingredient List db which adds the recipe to the shopping list by id.  There will then be a separate sql function that joins across all tables (SELECT) by a unique ingredient. 
There is also a helper function in JS to sum up all ingredients and calculate amounts. 
