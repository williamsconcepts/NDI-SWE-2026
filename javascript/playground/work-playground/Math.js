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

// Math.round() - Rounds to the nearest integer
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


// function to generate a random whole number
// between the min and max value
function anyNumber(min, max) {

  // using the Math.floor() to round down and remove decimal part and the math.random() to generate a decimal.
  // Math.random() generates a decimal between 0 and 0.999...
  // Multiplying by (max - min + 1) scales it to the desired range.
  // Math.floor() removes the decimal part.
  // Adding min shifts the range so it starts at the minimum value.

    return Math.floor(Math.random() * (max - min)) + min;
}

// displays a random number between 1 and 10
console.log(anyNumber(3,8));