/**
 * The Return
 *
 * the return value functions can give bck a result when we specify a return value.
 */

import { add } from "../work-playground/working-with-files/math";

// using console.log()
// function addTwoNumbers(x, y) {
//   console.log(x + y);
// }

// using return
function addTwoNumbers(x, y) {
  return x + y;
}

// let result = addTwoNumbers(4, 5);
// console.log(result);

let resultsArr = [];

for (let i = 0; i < 10; i++) {
  let result = addTwoNumbers(i, 2 * 1);
  resultsArr.push(result);
}
console.log(resultsArr);

/**
 * Practice
 *
 * 1. Set up an empty array to store the values that will be calculated within the loop.
 *
 * 2. Create a loop that runs 10 times, incrementing by 1 each time, creating two values each iteration. For the first value, multiply the value of the loop count by 5. For the second value, multiply the value of the loop counter by itself.
 *
 * 3. Create a function that returns the value of the two parameters passed into the function when it is called. Add the values together, returning the result.
 *
 * 4. Within the loop, call the calculation function, passing in the two values as arguments into the function and storing the returned result in a response variable.
 *
 * 5. Still within the loop, push the result values into the array as it iterates through the loop.
 * 6. After the loop is complete, output the value of the array into the console.
 *
 * 7. You should see the values [0, 6, 14, 24, 36, 50, 66, 84, 104, 126] for the array in the console.
 */

let arrNum = [];

for (let i = 0; i < 10; i++) {
  let res = addTwoNumbers(i, 5 * i);
  arrNum.push(res);
}
console.log(arrNum);

// returning using an arrow function
// let addNumbers = (x, y) => x + y;

// let resul = addNumbers(43, 64);
// console.log(resul);
