const { nanoid } = require("nanoid");
// const menu = require("../../eidas-drinks/data/drinkMenu.json");
const menu = require(/scripts/drinkMenu.js)

const inform = console.log;

function create(cart, name, size) {
  const drink = {
    name: name,
    id: nanoid(4),
    price: menu[name]|| 0,
    size: size || 0,
  };
  cart.push(drink);
  return cart;
}

function index(cart) {
  return cart.map((item) => item.id + ' ' + item.name).join('\n');
}

function show(cart, itemId) {
  const item = cart.find((item) => item.id === itemId);
  if(item){
  return item.id + ' ' + item.name + ' ' + item.price + ' points';
} else {
  return "Item not found"
}
}

function destroy(cart, itemId) {
  const index = cart.findIndex((item) => item.id === itemId);
  if (index > -1) {
    cart.splice(index, 1);
    inform('Item successfully removed from cart');
    return cart;
  } else {
    inform('Item not found. No action taken');
    return cart;
  }
}

function edit(cart, itemId, updatedItem, itemPrice) {
  const index = cart.findIndex((item) => item.id === itemId);
  if (index > -1) {
    cart[index].id = itemId;
    cart[index].name = updatedItem;
    cart[index].price = itemPrice[updatedItem] || 0;
    inform('Item successfully updated');
    return cart;
  } else {
    inform('Item not found. No action taken');
    return cart;
  }
}

function score(cart) {
  return cart.reduce((acc, current) => acc + current.price, 0);
}

module.exports = {
  create,
  index,
  show, 
  destroy,
  edit, 
  score
};