const recipe = {
  "recipe": {
    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_56008870a1e326be7851141fc49bd53e",
    "label": "Roast Chicken",
    "image": "https://www.edamam.com/web-img/c24/c24a86f98a8cc1f13f795bdba2dae614.jpg",
    "source": "Epicurious",
    "url": "http://www.epicurious.com/recipes/food/views/Roast-Chicken-394676",
    "shareAs": "http://www.edamam.com/recipe/roast-chicken-56008870a1e326be7851141fc49bd53e/chicken/alcohol-free/591-722-cal",
    "yield": 4,
    "dietLabels": [
      "Low-Carb"
    ],
    "healthLabels": [
      "Sugar-Conscious",
      "Peanut-Free",
      "Tree-Nut-Free",
      "Alcohol-Free"
    ],
    "cautions": [],
    "ingredientLines": [
      "1 tablespoon kosher salt",
      "1 whole 4-pound chicken, giblets reserved for another use",
      "1/4 cup (1/2 stick) unsalted butter, melted"
    ],
    "ingredients": [{
        "text": "1 tablespoon kosher salt",
        "weight": 14.772500991821289
      },
      {
        "text": "1 whole 4-pound chicken, giblets reserved for another use",
        "weight": 920
      },
      {
        "text": "1/4 cup (1/2 stick) unsalted butter, melted",
        "weight": 56.75
      }
    ]
  }
}

let recipes = [];
for(let i = 0; i < 5; i++){
  recipes.push(recipe);
}

const recipesJson = JSON.stringify(recipes);
console.log(recipesJson);

module.exports = recipesJson;
