// https://www.codewars.com/kata/pete-the-baker/train/javascript

function cakes(recipe, available) {

    // quantity
    const quantityArray = (a) => Object.values(a);

    // sum of ingredients
    const sum = (arr) => quantityArray(arr).reduce((sum, acc) => sum += acc, 0);

    // not the right ingredient, return number of times he can do the recipe
    if (Object.values(recipe).length > Object.values(available)) return 0;

    // not enough ingredient, return number of times he can do the recipe
    if (sum(recipe) > sum(available)) return 0;

    // verify there are the same ingredients
    for (key in Object.keys(recipe)) {
        if (!Object.keys(available).includes(key)) return 0;
    }

    // finally find the limited ingredient quantity 
    let count = [];
    for (key in Object.keys(recipe)) {
        let limited = Math.floor(available[key] / recipe[key]);
        count.push(limited);
    }
    return Math.min(...count);

}













const recipeA    = {flour: 500, sugaokokokr: 200, eggs: 1};
const availableA = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipeA, availableA), 2, 'Wrong result for example #1');
  
const recipeB    = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
const availableB = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipeB, availableB), 0, 'Wrong result for example #2');


