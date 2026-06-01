/**
 *
 *  Student Assignment for Monday 24th May 2026.
 *
 *  Do a deep study for presentation on command line arguments and process.argv in JavaScript. Then, write a code snippet that demonstrates the use of command line arguments in JavaScript. You can use the process.argv array to access the command line arguments passed to your script. Make sure to include comments in your code to explain how it works.
 *
 */

/*The process.argv in javascript is used to access and interact with the command-line arguments. It is an array that contains the command line arguments and helps user to interact node app using CLI. */

/*This property returns an array containing the arguments passed to the process when run in the command line.

process.argv[0]: is the process execution path
process.argv[1]: is the path for the js file.
process.argv[2] and more: Are items in the array arguments passed by the user. */

/*What Are Command Line Arguments?
Command line arguments are values passed to a program when it is executed from the terminal. */

/*Below examples illustrate the use of process.argv property in Node.js:

Example 1: The below example uses process.argv property to display the CLI argument passed by the user */

<<<<<<< HEAD:javascript/playground.js
const name = process.argv[2]
console.log(`Hello ${name}`)

/*Example 2: Converting Arguments to Numbers 
Note: Arguments are always recieved as strings*/
=======
// const name = process.argv[2];
// console.log(`Hello ${name}, How was your weekend?`);

/*Example 2: Converting Arguments to Numbers 
Note: Arguments are always recieved as strings*/

// const num1 = Number(process.argv[2]);
// const numb2 = Number(process.argv[3]);

// console.log(num1 + numb2);

/* Assignment 1  Write a command line program that collects numerical input from the console, uses a ternary operators to compare the input if it is even or odd and prints the message the message "Even Number" if the number is even, or "Odd Number" if the number is odd */

// This collects he number from the command line
const number = Number(process.argv[2]);

// implementing the tenary operator and using % 2 === 0 to check if the number can be divided by 2
const result = number % 2 === 0 ? "Even number" : "Odd number";

// Result
console.log(result);

/*

Write a program that makes use of ternary operators to grade a user's score according to the prescription below. 

// Excellent -> 70 and above // Very Good -> 60 to 70 // Good -> 50 to 60 // Pass -> 45 to 50 // Fair -> 40 to 45 // Fail -> 40 and below */
let sentence = "This is me";
console.log();
>>>>>>> 5e77454e70c4712c28e891b1bece4f4e8ffb85cb:javascript/playground/playground.js
