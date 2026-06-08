/**
 * async await
 * with the async keyword, we can makea funtion return a promise. This makes teh promises nicer to read.
 *
 */

function saySomething(x) {
  return new Promise((res) => {
    setTimeout(() => {
      res("Something" + x);
    }, 2000);
  });
}

async function talk(x) {
  const words = await saySomething(x);
  console.log(words);
}
// talk(2);
// talk(4);
// talk(8);

/**
 * Practice
 * 
 * 1. Create a global value for a counter.
2. Create a function that takes one argument. Return the result of a new Promise, setting a setTimeout() function that will contain the resolve instance.
3. Increment the counter within setTimeout(), adding one every second. Resolve the Promise with the value of the counter and the value of the variable that was in the function argument.
4. Create an asynchronous function that outputs into the console the value of the global counter and the value of the argument of the function.
5. Create a variable to capture the returned resolve value from the await function. Output that result into the console.
6. Create a loop to iterate 10 times, incrementing the value and invoking the async function, passing the value of the increment variable as the parameter in the function.
 */

// create a global counter
let counter = "0";

// create a function that returns a Promise
function incrementCounter(value) {
  return new Promise((res) => {
    setTimeout(() => {
      // increment the counter every second
      counter++;

      // resolve with both value
      res(`X Value: ${value}, Counter: ${counter}`);
    }, 1000);
  });
}

// create an async function
async function displayCount(value) {
  console.log(`ready: ${value}, counter: ${counter}`);

  // capture the resolved value
  const result = await incrementCounter(value);
  console.log(result);
}

// loop 10 times
for (let i = 0; i < 10; i++) {
  displayCount(i);
}
