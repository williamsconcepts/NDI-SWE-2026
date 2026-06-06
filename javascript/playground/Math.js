/**
 *
 * The Math() class is a built-in javascript object containing mathematical functions
 *
 * Math.random()
 * Math.round()
 * Math.floor()
 * Math.celi()
 * Math.max()
 * math.min()
 * Math.pow()
 * Math.sqrt()
 * Math.abs()
 */

// Retun a number between 0 and 1
console.log(Math.random(34));

// Random number from 1 to 10 using Math.floor() and Math.round()
const num = Math.floor(Math.random() * 10);
console.log(num);

// Math.round() - Rounds tothe nearest integer
console.log(Math.round(4.7));
console.log(Math.round(4.4));

// Math.floor() - Always rounds down
console.log(Math.floor(5.9));

// Math.celi() - Always rounds up
console.log(Math.ceil(5.1));

// Math.max() and Math.min()
console.log(Math.max(30, 56, 84));
console.log(Math.min(5, 83, 4, 78, 3));

// Math.pow()
console.log(Math.pow(2, 3));
console.log(2 ** 4); // modern alternative

// Math.sqrt()
console.log(Math.sqrt(81));

// Math.abs() - Returns absolute value
console.log(Math.abs(-90));
