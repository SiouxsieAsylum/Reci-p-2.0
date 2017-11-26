## 11/18/17 - Andrea McKenzie-
Started fleshing out the schema for the databases in order to get an idea of what features will be possible based on query constraints. We are looking at 7 tables, three of which are just joins in order to make queries easier and to keep the structure clean. Adding recipies to the database will require a lot of `INSERT . . . SELECT . . . FROM . . . JOIN` but as long as we keep the purposes for the tables straight having complex queries shouldn't be an issue.

Notes to self:

]
The INSERT part of INSERT . . . SELECT takes parens around the params, SELECT does not.
ALTER TABLE tablename ALTER COLUMN columnname TYPE type USING columnname::type for if we want to change the way we refernce tables (using ids vs names or whatever)
ALTER TABLE tablename ADD CONSTRAINTNAME(columnname); for if we want to add a new relation
11/20/17 - Steven and Luz


## 11/20/17 - Steven and Luz
- Fixed Read Me and created server.js

Fixed Read Me and created server.js
##11/20/17 221 - OZ

Added services directory to root, inside of which: added auth directory, inside of which: added three files: local.js, passport.js, and authHelpers.js to handle authentication on server.

Added config file internals, and ** DATABASE NAME HAS BEEN LEFT BLANK WITH "PLEASE FILL ME IN" as a placeholder **

##11/21/17 10:30 Steve

Fix React
##11/21/17 11:00 Ozzy

Makes MainDisplay Component
##11/21/17 11:46 Steven

Make recipelist component w dummy data
##11/21/17 12:40 Ozmang

Made recipethumbnail and attached it to recipe list

1. Made recipethumbnail and attached it to recipe list

##11/22/17 Andrea McKenzie

Completed model for adding recipes from api to database. Structure is as follows:

-`RAC.addIngredients` is a nested loop that takes the response object creates an array of objects that contain names of ingredients. We call `RAC.sql` to convert that array into a string with that object surrounded by perentheses to be passed into the Recipe model's `addIngredients` function. We then return the`Promise.all` that resolves all the promises returned by the model's `addIngredients` function, which adds to the ingredients table.

-`RAC.createRecipe` is mapping over the response object and returning an array objects containing the recipe names, image urls, and serving sizes. We then return the`Promise.all` that resolves all the promises returned by the model's `create` function, which adds to the recipe table.

-`RAC.addRecipes` is where the magic happens. `api.getRecipes`is the helper that calls the initial fetch. The response is passed both through `RAC.createRecipe` and `RAC.addIngredients` and set to let resolve together within `Promise.all`. Then, the data is seperated into its two halves (recipes and ingredients) and each is made into an array. A loop is then used to associate the correct recipe wih ingredient list by id inside of a container array. Lastly, we loop over that container array, where for each we loop through the ingredient list for that pairing. this loop, like the `RAC.sql`, creates multiple strings in parentheses that constain the recipe id, the ingredient id, the amount of that ingredient, and the unit. That is then passed to the Recipe model's `createJoinList` method to add those all to the `ingredientList` table.

## 11/22/17 13:20 steve and oz
- set up login and register nav, fix path through db to user so that user can register and login correctly.
- dynamically renders nav components (and userform underneath)
- todo: potentially lift state from main display so that app can have the userid and name, render a different nav for logged in

## 11/22/17 1400 steve
- some small react practice fixes

## 11/22/17 1600 steve+ox
- conditional nav fixing

## 11/25/17 1800 steve and oz pair prog
- refactor nav and edit styles
- add logout functionality

## 11/26/17 1315 steve and oz nav register button change
- register button doesn't show up on left side of login div when register is selected