Routes

//-----------------------------------List Routes----------------------------------// 
Shopping List Routes

<!-- INDEX = listRouter.get('/', listController.index) -->
This route takes you to the index of all of the user's shopping lists; populated by the api recipes selected or created by the user indepenedently. 

<!-- SINGLE VIEW = listRouter.get('/:id', listController.show) -->
This route gets and displays a single pre-existing shopping list by finding the id when a specific recipe is selected on the main page.

<!-- CREATE NEW SINGLE = listRouter.post('/', listController.create) -->
This route creates and displays a new single shopping list. 

<!-- EDIT/UPDATE = listRouter.put('/:id', listController.update)  -->
This route edits and updates a pre-existing shopping list by finding id.

<!-- DELETE = listRouter.delete('/:id',listController.delete) -->
This route deletes a pre-existing shopping list by finding id.



//-----------------------------------Recipe Routes----------------------------------// 
Recipe List Routes

<!-- INDEX = recipeRoutes.get('/', recipeControllers.index) -->
This route gets all the recipes from the Spoonacular API, and populates the main page with random recipes.  All recipes have an add button that will populate the landing page shopping list with the corresponding ingredients.

<!-- SINGLE VIEW = recipeRoutes.get('/:id', recipeControllers.show);  -->
This route displays a single recipe when selected from the main page, along with an add button that will create a shopping list for this specific recipe when selected.

<!-- ADD NEW INGREDIENTS = recipeRoutes.post('/:recipe_id',recipeControllers.addIngredientsToNewRecipe) -->
This route allows a logged-in user to add ingredients to a new recipe that has been created.

<!-- DELETE RECIPE = recipeRoutes.delete('/:recipe_id',recipeControllers.removeUserRecipe) -->
This route allows a logged-in user to delete a recipe they have created from their database.

<!-- DELETE INGREDIENT = recipeRoutes.delete('edit/:recipe_id/:ingredient_id',recipeControllers.removeIngredient) -->
This route allows logged-in user to remove an ingredient from an open recipe.

<!-- CREATE NEW SINGLE = recipeRoutes.post('/new',recipeControllers.createRecipe) -->
This route allows logged-in user to create a new recipe.  

<!-- recipeRoutes.post('/new/:recipe_id',recipeControllers.addIngredientsToNewRecipe) -->
This route allows logged-in user to add ingredients to create a new recipe


