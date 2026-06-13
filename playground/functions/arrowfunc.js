/**
 * Arrow functions
 *
 * Arrow functions are a special way of writing functions.
 * they are shorthand notation for writiing functions, they are most used for functions that consist of only one statement.
 *
 * (param1, param1) => body of function
 *
 * or
 *
 * () => body of function
 *
 * or
 *
 * (param) => body of function
 *
 *
 *
 *
 */

function doSomething(x) {
  console.log(x);
}

// we can write it like this
let doingArrowStuff = (x) => console.log(x);
doingArrowStuff("Great!");

// using more arguments
let addTwoNumbers = (x, y) => console.log(x + y);
addTwoNumbers(4, 8);

// No arguments
let sayHi = () => console.log("hi");
sayHi();

// combining arrow function with other methods like forEach()

const arr = ["ebube", "maapp", "buddy", "maria"];
arr.forEach((e) => console.log(e));
