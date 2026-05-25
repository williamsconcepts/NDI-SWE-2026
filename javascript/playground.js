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

const name = process.argv[2]
console.log(`Hello ${name}`)

/*Example 2: Converting Arguments to Numbers 
Note: Arguments are always recieved as strings*/
