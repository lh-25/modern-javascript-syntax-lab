// EXERCISE 1: Applying Array.prototype.map()
 // Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const multipliedNums = nums.map((num) => {
  return num * 2
})

console.log(multipliedNums)
