/**
 * 
 * ## Question 1

Write a command line program that collects numerical input from the console, uses a ternary operator to compare the input if it is even or odd
and prints the message the message "Even Number" if the number is even, or "Odd Number"
if the number is odd.


// Explanation 
/**
 * 
 * process.argv[2] gets the user input from the command line 
 * Number() converts the inputs from a string to a number
 * % 2 === 0  checcks  if  the number is divisible by 2
 * codition ? if the value is true : value is false
 */

// collect the number from the command line
const number = Number(process.argv[2]);
const result = number % 2 === 0 ? "Even Number" : "Odd Number";
console.log(result);

/*
## Question 2
Write a program that makes use of ternary operators to grade a user's score
according to the prescription below, and prints the remark to the console.

// Excellent -> 70 and above
// Very Good -> 60 to 70
// Good -> 50 to 60
// Pass -> 45 to 50
// Fair -> 40 to 45
// Fail -> 40 and below
 */

// const score = 65;
const score = Number(process.argv[2]);

// let grade;

// grade = score >= 70 ? "Excellcent" : grade;
// grade = score >= 60 && score < 70 ? "Very Good" : grade;
// grade = score >= 50 && score < 60 ? "Good" : grade;
// grade = score >= 45 && score < 50 ? "Pass" : grade;
// grade = score >= 40 && score < 45 ? "Fair" : grade;
// grade = score < 40 ? "Fail" : grade;

// console.log(`Grade: ${grade}`);

// using nested ternery operators
// const score = 65;

const grade =
  score >= 70
    ? "Excellent"
    : score >= 60
      ? "Very Good"
      : score >= 50
        ? "Good"
        : score >= 45
          ? "Pass"
          : score >= 40
            ? "Fair"
            : "Fail";

console.log(`Grade: ${grade}`);
