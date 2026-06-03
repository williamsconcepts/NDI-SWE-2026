/**
 * 
 * slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
 * 
 * The slice() method can also be used to create a copy of an array. When called without arguments, it returns a shallow copy of the entire array.
 */

// Example 1: Using slice to extract a portion of an array
const fruits = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];
const citrusFruits = fruits.slice(1, 4);
console.log(citrusFruits); // Output: ['banana', 'cherry', 'date']

// Example 2: Using slice to create a copy of an array
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = originalArray.slice();

console.log(copiedArray); // Output: [1, 2, 3, 4, 5]

// Example 3: Using slice with negative indices
const numbers = [10, 20, 30, 40, 50];
const lastThreeNumbers = numbers.slice(-3);
console.log(lastThreeNumbers); // Output: [30, 40, 50]