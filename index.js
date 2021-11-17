
let shoppingList = [
    {article: 'Milk', price: 1.20}, 
    {article: 'Cocoa', price: 2.00}, 
    {article: 'Salad', price: 2.00}, 
    {article: 'Carrot', price: 2.00}, 
    {article: 'Tomatoes', price: 2.50}, 
    {article: 'Ready meals', price: 5.00}
];

let yourName=prompt(`Insert item in the list.`);

let yourPrice=Number(prompt(`Insert the price of the item.`));

shoppingList.push({article:`${yourName}`, price:yourPrice});


for (const item of shoppingList) {
    
    console.log(`The ${item.article} cost £${item.price}`);
 }

 let totalPrice = shoppingList.reduce(function (accumulator, item) {
    return accumulator + item.price;
  }, 0);

 console.log(`The total of your shopping list is :£${totalPrice}`);
    



