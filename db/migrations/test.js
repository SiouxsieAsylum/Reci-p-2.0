const fetch = require("node-fetch");

const url = 'https://api.edamam.com/'
const api_key ="&app_key=58fcd92e999ed8798a531581ffc912ca"
const api_id ="&app_id=e9191ac9"
const search = "search"
const ingredient = "ingredient"
const query = "q",

fetch(url + ingredient + query+ "?=" + "chicken" + api_id + api_key)
