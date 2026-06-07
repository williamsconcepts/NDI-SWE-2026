/**
 *
 * A parameter is defined as the variable listed inside the parathesis of the function definition, which defines the scope of the function.
 */

function tester(para1, para2) {
  return para1 + " " + para2;
}
const arg1 = "argument 1";
const arg2 = "argument 2";

// A practical example which takes x and y as parameters
function addTwoNumbers(x, y) {
  console.log(x + y);
}

function addTwoNumbers(x = 4, y = 22) {
  console.log(x + y);
}

// we can call the function with arguments
// myFunc("arg1", "arg2");
// console.log("argument");
addTwoNumbers();
addTwoNumbers(3, 6);
addTwoNumbers(23, -34);
addTwoNumbers(1, 3, 5, 6);
/**
 * Practice
 * 
 * 
1. Set up two variables containing number values.
2. Set up a variable to hold an operator, either + or -.
3. Create a function that retrieves the two values and the operator string value within its parameters. Use those values with a condition to check if the operator is + or -, and add or subtract the values accordingly (remember if not presented with a valid operator, the function should default to addition).
4. Within console.log(), call the function using your variables and output the response to the console.
5. Update the operator value to be the other operator type—either plus or minus—and call to the function again with the new updated arguments.
 */

// set up varables containing number values
let num1 = 40;
let num2 = 54;

// set up a vaviable that holds and operator
let operator = "+";
// let operator = "-";

// create a function that performs the opertions
// function calculate(value1, value2, op) {
//   if (op === "+") {
//     return value1 + value2;
//   } else if (op === "-") {
//     return value1 - value2;
//   } else {
//     // default to addition if the operator is invalid
//     return value1 + value2;
//   }
// }

// using ternary operator
function calculate(a, b, op) {
  return op === "-" ? a - b : a + b;
}

// call the function and output the result
console.log(calculate(num1, num2, operator));
