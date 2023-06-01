/**
 *  Write a function called displayName() that takes an object as an argument and 
 * prints the person's first and last name. Use object destructuring in the function argument.
 *  And also, use template strings when printing the first and last name.
 */

function displayName(obj) {
    let { firstname, lastname } = obj
    console.log(`my fullname is ${firstname} ${lastname}`);
}

displayName({ firstname: 'shashank', lastname: 'kumar' })
/**Q2 Write a function called calculateSalesTotals() which returns an array with new two new keys (sale and total).
 *  The key 'sale' equals the calculated sale price based on the original price and the discount. 
 * The key 'total' equals the computed total based on stock, the original price and the discount. 
 * You have to use Object Destructuring on the objects in the sales array and Object Default Values for the discount key. 
 * The default value would be 0.0. */

  //EXPECTED OUTPUT (array of objects):
//   [
//     {
//       item: "PS4 Pro",
//       original: 399.99,
//       sale: 399.99,
//       stock: 3,
//       total: 1199.97
//     },
//     {
//       discount: 0.1,
//       item: "Xbox One X",
//       original: 499.99,
//       sale: 449.991,
//       stock: 1,
//       total: 449.991
//     },
//     {
//       item: "Nintendo Switch",
//       original: 299.99,
//       sale: 299.99,
//       stock: 4,
//       total: 1199.96
//     },
//     {
//       discount: 0.8,
//       item: "PS2 Console",
//       original: 299.99,
//       sale: 59.99799999999999,
//       stock: 1,
//       total: 59.99799999999999
//     },
//     {
//       discount: 0.65,
//       item: "Nintendo 64",
//       original: 199.99,
//       sale: 69.9965,
//       stock: 2,
//       total: 139.993
//     }
// ]
const sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];
  
  function calculateSalesTotals(sales){
    let updatedSales = sales.map(sale=>{
      let {original, stock, discount=0.0} = sale;
      sale['sale'] = original - original * discount;
      sale['total'] = sale.sale*sale.stock;
      return sale;
    });
    return updatedSales;
  }
  let updatedSales = calculateSalesTotals(sales);
console.log(updatedSales);  
  
  /**
   * Create a function named goToSecondClass() that accepts a destructured object as a parameter. 
   * The parameter extracts the "secondHour" property of the object. The function should return this statement:
"Time to go to {property_value} class!"
Example: "Time to go to Programming class!"
   */

const myClasses = {
    firstHour: "Ethics",
    secondHour: "Programming",
    thirdHour: "Biology"
};
function goToSecondClass({ secondHour }) {
    return `Time to go to ${secondHour} class!`

}
console.log(goToSecondClass(myClasses));