/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categories = {};
  
  transactions.forEach(transaction => {
    const { catagory, price } = transaction;
    if ( categories[catagory] ) {
      categories[catagory] += price
    } else {
      categories[catagory] = price
    }
  });
  const result = Object.keys(categories).map(category => ({
    category,
    totalSpent: categories[category],
  }));
  return result;
  
}

console.log(calculateTotalSpentByCategory({
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza',
}));

module.exports = calculateTotalSpentByCategory;
