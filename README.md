# project3-recipe-shopper
WDI Thundercats Project 3

# User story

Stefano is a young professional, millennial and beginner cook who would like to do more home cooking and reduce the amount of takeout he consumes.  Despite his culinary interests, he loses motivation due to the preparatory process.  While he enjoys researching recipes, he is unable to organize himself and his pantry to execute all of the meals he has planned for the week.

Recipe-shopper is an app that helps him research, archive, organize and aggregate the meals he is interested in preparing.  It takes the ingredient information from the recipes he earmarks and creates a shopping list he can utilize to prepare for the week.  

The list can be modified to reflect what is already available in the fridge/pantry or to add/remove ingredients based on preference.

Recipe-shopper stores favorite recipes and shopping lists for future user consideration.

## Andrea McKenzie- 11/18/17

Started fleshing out the schema for the databases in order to get an idea of what features will be possible based on query constraints. We are looking at 7 tables, three of which are just joins in order to make queries easier and to keep the structure clean. Adding recipies to the database will require a lot of `INSERT . . . SELECT . . . FROM . . . JOIN` but as long as we keep the purposes for the tables straight having complex queries shouldn't be an issue. 



Notes to self:
- The `INSERT` part of `INSERT . . . SELECT` takes parens around the params, `SELECT` does not. 
- `ALTER TABLE tablename ALTER COLUMN columnname TYPE type USING columnname::type` for if we want to change the way we refernce tables (using ids vs names or whatever)
- `ALTER TABLE tablename ADD CONSTRAINTNAME(columnname);` for if we want to add a new relation
