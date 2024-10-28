// EXERCISE 1: Applying Array.prototype.map()
 // Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
// const multipliedNums = nums.map((num) => {
//   return num * 2
// })

// console.log(multipliedNums)


// EXERCISE 2: Array destructuring
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// // Your code here
// const [firstTopping, secondTopping] = pizzaToppings

// console.log(firstTopping)
// console.log(secondTopping)


// EXERCISE 3: Destructuring objects
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

// const car = {
//   make: 'Audi',
//   model: 'q5',
// };

// Your code here
// const {make, model} = car
// console.log(make)
// console.log(model)



// EXERCISE 4: Applying the spread operator on arrays

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...pizzaToppings] 

console.log(controversialPizzaToppings)

// EXERCISE 5: Applying the spread operator on objects
// Duplicate the following object and spread its values into a new variable `myCar`.

const car = {
  make: 'Audi',
  model: 'q5',
};

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here
const myCar = {...car}
myCar.model = 'q7'

console.log(car)
console.log(myCar)