/**
 * Functions are a great building block that will reduce the amount of code you will need in your app.
 *
 * You can call afunction whenever you need it, and you can write it as a kind of template with variables.
 *
 * Topics to cover;
 * 
• Basic functions
• Function arguments
• Return
• Variable scope in functions
• Recursive functions
• Nested functions
• Anonymous functions
• Function callbacks
 *
 */

/**
 * Basic functions
 *
 * prompt(), console. log(), push(), and sort() for arrays.
 *
 * These are all functions. Functions are a group of statements, variable declarations, loops, and so on that are bundled together. Calling a function means an entire group of statements will get executed.
 */

/**
 * Invoking functions
 *
 * nameOffunction();
 * functionThatTakesInput("the input",  5, true);
 *
 * This is invoking a function called nameOffunction with no arguments, and the a function called functionThatTakesInput with three required arguments.
 */

/**
 * Writing functions
 *
 * This can be done using a function keyword.
 *
 * function nameOfFunction() {
 *      // content of the function
 * }
 *
 * and the above function can be called like this
 * >> nameOfFunction();
 *
 * Let's write a function that asks for your name and then greets you;
 *
 */

function sayHello() {
  //let you = prompt("What is your name? ");
  let you = "Ebube";
  console.log("Hello", you + "!");
}
sayHello();

/**
 * functions can contain variables, and variables can contain a function.
 */

let varContainingFunc = function () {
  let varInFunc = "I'm in a function";
  console.log("Hi", varInFunc);
};
varContainingFunc();

/**
 * Naming functions
 *
 * Use camelCase for your functions: this means that the first word starts with a lowercase letter and new words start with a capital. That makes it a lot easier to read and keeps your code consistent.
 * 
 * Make sure that the name describes what the function is doing: it's better to call a number addition function addNumbers than myFunc.
 * 
 * Use a verb to describe what the function is doing: make it an action. So instead of hiThere, call it sayHi.
 * 
 * 
 * Practice:
 * 
 *  1. Create a function that takes two parameters, adds the parameters    together, and returns the result.
    2. Set up two different variables with two different values.
    3. Use your function on the two variables, and output the result using
    console.log.
    4. Create a second call to the function using two more numbers as arguments
    sent to the function.

 */

// 1. Function that takes two parameters,
// adds them together, and returns the result.
function addNumbers(num1, num2) {
  return num1 + num2;
}

// 2. Two different variables with different values.
let firstValue = 15;
let secondValue = 25;

// 3. Use the function with the variables
// and display the result.
let result1 = addNumbers(firstValue, secondValue);

console.log(result1);

// 4. Call the function again with two numbers
// passed directly as arguments.
let result2 = addNumbers(40, 60);

console.log(result2);

/**
 * practice 2
 * 
 * 
1. Create an array of descriptive words.
2. Create a function that contains a prompt asking the user for a name.
3. Select a random value from the array using Math.random.
4. Output into the console the prompt value and the randomly selected array value.
5. Invoke the function.
 */

const words = ["amazing", "kind", "supernatural", "wonderful", "loving"];

function sayName() {
  //   let user = prompt("What is your name? ");
  let name = "Maria";

  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];

  console.log(`Hello, ${name} you are ${randomWord}!`);
}
sayName();
