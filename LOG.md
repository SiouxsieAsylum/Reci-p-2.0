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


