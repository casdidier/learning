// https://www.codewars.com/kata/new-cashier-does-not-know-about-space-or-shift/train/javascript

const menuItems = [
  'Burger',
  'Fries',
  'Chicken',
  'Pizza',
  'Sandwich',
  'Onionrings',
  'Milkshake',
  'Coke',
];

// function getOrder(input) {

//     const order = [];

//     const findMenuItem = (menuItem, input) => input.match(menuItem.toLowerCase());

//     menuItems.forEach((menuItem) => !findMenuItem(menuItem, input) ? order.concat(menuItem) : null );

//     return order.join(' ');
// }


function getOrder(input) {
  return menuItems.reduce((orderString, menuItem) => {
    const regexp = new RegExp(menuItem.toLowerCase(), 'g');
    const orderItems = input.match(regexp);
    if (orderItems) {
      return orderString + ' ' + (menuItem + ' ').repeat(orderItems.length).trim();
    }
    return orderString.trim();
  }, '');
}

console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"), "answer",
                      "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke");
// console.log(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"),
//                       "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke");