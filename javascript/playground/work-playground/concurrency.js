/**
 * Concurrency
 *
 * callbacks
 * promises
 * async/await
 * event loop
 */

/**
 * Callbacks are functions that takes another function as an argument, which is then called wheh the rest of te initial function has finished. (A function calling a function).
 */
// use case 1
function doSomething(callback) {
  callback();
}

function sayHi() {
  console.log("Hi");
}

doSomething(sayHi);

// use case 2

function judge(grade) {
  switch (true) {
    case grade === "A":
      console.log("You got an", grade, ": amazing!");
      break;
    case grade === "B":
      console.log("You got a", grade, ": well done!");
      break;
    case grade === "C":
      console.log("You got a", grade, "alright!");
      break;
    case grade === "D":
      console.log("You got a", grade, "hmmm...");
      break;
    default:
      console.log("An", grade, "! what?!");
  }
}

function getGrade(score, callback) {
  let grade;
  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      console.log(score);
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    default:
      grade = "F";
  }
  callback(grade);
}

getGrade(60, judge);

// use case 3 with setInterval()
// setInterval(encourage, 500);

// function encourage() {
//   console.log("You are doing great, keep going");
// }

/**
 *  Practice 1:
 * 1. Create a function named greet() that takes one argument, fullName. That argument should be an array. Output the items of the array into the console interpolated into a greeting message string.
 *
 * 2. create a second function that has two argument: the first one is a string for the user's full name, and the second is callback function
 * 
 * 3. Split the string into an array using the split() method.
 * 
 * 4. Send the full-name array to the greet() function created in the first step.
 * 
 * 5. Invoke the process of the callback function.

 */

function greet(fullName) {
  console.log(`Hello, ${fullName.join(" ")}`);
}

function processUser(name, callback) {
  // converting the string into an array using split() method
  const fullNameArr = name.split(" ");

  // send the array to the greet() function
  greet(fullNameArr);

  // Invoke the callback function
  callback();
}

// callback function
function result() {
  console.log("greeting completed.");
}

// call function
processUser("Ebube dike", result);

/**
 * Promises
 *
 * A promise is a special object that connects code that needs to produce a result and the code that needs to use this result in the next step.
 *
 * resolve()
 * reject()
 */

let promise = new Promise(function (resolve, reject) {
  // do something that might take a while
  // let's just set x insead for this example
  let x = 20;
  if (x > 20) {
    resolve(x); // on success
  } else {
    reject("Too low"); // an error
  }
});

promise.then(
  function (value) {
    console.log("succes:", value);
  },
  function (error) {
    console.log("Error:", error);
  },
);
