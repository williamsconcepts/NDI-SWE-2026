/**
 * Spread Operator
 *
 * The spreadoperator is a special operator, it consists of three dots used before a referenced expresson or string, and it spreads out the arguments or elements of an array.
 *
 */

let spread = ["so", "much", "fun"];
let message = ["javascript", "is", ...spread, "and", "very", "powerful"];

console.log(message);

// sending multiple arguments toa function
function addTwoNumbers(x, y) {
  console.log(x + y);
}
let arr = [5, 9];
addTwoNumbers(...arr); // instead of addtwoNumbers(5,9)

// Calling a function with multiple spread operators
function addFourNumbers(w, x, y, z) {
  console.log(w + x + y + z);
}
let arr1 = [8, 9];
let arr2 = [7, 77];
addFourNumbers(...arr1, ...arr2);
