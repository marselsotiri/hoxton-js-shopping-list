
// let shoppingList = [
//     {article: 'Milk', price: 1.20}, 
//     {article: 'Cocoa', price: 2.00}, 
//     {article: 'Salad', price: 2.00}, 
//     {article: 'Carrot', price: 2.00}, 
//     {article: 'Tomatoes', price: 2.50}, 
//     {article: 'Ready meals', price: 5.00}
// ];

// let yourName=prompt(`Insert item in the list.`);

// let yourPrice=Number(prompt(`Insert the price of the item.`));

// shoppingList.push({article:`${yourName}`, price:yourPrice});


// for (const item of shoppingList) {
    
//     console.log(`The ${item.article} cost £${item.price}`);
//  }

//  let totalPrice = shoppingList.reduce(function (accumulator, item) {
//     return accumulator + item.price;
//   }, 0);

//  console.log(`The total of your shopping list is :£${totalPrice}`);
 








// Instructions
// - Use these items and their respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
// - Store this information using the most appropriate data structures we've studied so far
// - Have a prompt to add an item to the list (you can have two prompts for the item and its price)
// - Output a list displaying each item and its price
// - Output the total at the end

// const shoppingListNames = [
//   'Milk',
//   'Cocoa',
//   'Salad',
//   'Carrots',
//   'Tomatoes',
//   'Ready meals'
// ]

// const shoppingListPrices = [1.2, 2.0, 2.0, 2.0, 2.5, 5]

// for (let i = 0; i < shoppingListNames.length; i++) {
//   const name = shoppingListNames[i]
//   const price = shoppingListPrices[i]

//   console.log(`${name} costs £${price.toFixed(2)}`)
// }

const shoppingList = [
    { name: 'Milk', price: 1.2 },
    { name: 'Cocoa', price: 2.0 },
    { name: 'Salad', price: 2.0 },
    { name: 'Carrots', price: 2.0 },
    { name: 'Tomatoes', price: 2.5 },
    { name: 'Ready meals', price: 5 }
  ]
  
  // UNCOMMENT BELOW CODE FOR CHALLENGE
  
  // for (
  //   let userWantsToKeepGoing = true;
  //   userWantsToKeepGoing;
  //   userWantsToKeepGoing = confirm('Do you want to keep going?')
  // ) {
  const userItemName = prompt('What item would you like to add?')
  const userItemPrice = Number(prompt('How much does it cost?'))
  
  const newItem = { name: userItemName, price: userItemPrice }
  shoppingList.push(newItem)
  // }
  
  let total = 0
  
  for (const item of shoppingList) {
    total += item.price
  
    console.log(`${item.name} costs £${item.price.toFixed(2)}`)
  }
  
  console.log(`The total will be: £${total.toFixed(2)}`)
  

