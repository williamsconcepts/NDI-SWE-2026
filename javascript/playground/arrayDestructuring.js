/**
 * Array Destructuring
 * 
 * Array destructuring allows you to unpack values from arrays into distinct variables. It provides a concise syntax for extracting values from arrays and assigning them to variables in a single line of code.
 */

// without destructuring
const colors = ["Red", "Green", "Blue"];

const firstColor = colors[0];
const secondColor = colors[1];
const thirdColor = colors[2];

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

console.log("\n=========================================\n");

// with destructuring

const colors2 = ["Yellow", "Purple", "Cyan"];

const [first, second, third] = colors2;

console.log(first);
console.log(second);
console.log(third); 

console.log("\n=========================================\n");

// getting remaining elements using rest operator

const numbers = [1, 2, 3, 4, 5];

const [firstNum, ...rest] = numbers;

console.log(firstNum);
console.log(rest);

console.log("\n=========================================\n");

// default values in destructuring

const names = ["Alice"];

const [firstName, lastName = "Smith"] = names;

console.log(firstName);
console.log(lastName); 