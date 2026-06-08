/**
 * 
 * Promises in Js
 * 
 * A promise is an object that represents the result of an asynchronous operation (something that takes time).
 * 
 * javascript executes code line by line
 * 
 * some operations take time:
 * fetching data from a server
 * reading files
 * waiting for a timer 
 * // These are async operations
 * 
 * Promises has 3 states;
 * - Pending
 * - Fulfilled
 * - Rejected
 * 


>> >> Before Promises existed, we used callbacks

getData(function(result) {
    getMoreData(result, function(result2) {
        getEvenMoreData(result2, function(result3) {
            console.log(result3)
        })
    })
})

>> >> This becomes a callback hell. so promises fixs this...

 */

// synchronous
// console.log("Start");
// console.log("middle");
// console.log("End");

// Asynchronous
console.log("start");

setTimeout(() => {
  console.log("Timer Finished");
}, 3000);

console.log("End");

// Lets create a promise

const isPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operations successful!");
  } else {
    reject("Something went wrong!");
  }
});

isPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Aysnc and await - Modern and cleaner syntax

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 2000);
  });
}

async function getData() {
  const result = await fetchData();
  console.log(result);
}
getData();

/**
 * More on Promises
 *
 * A promise is a special object that connects code that needs to produce a result and the code that needs to use this result in the next step.
 *
 *
 *
 * resolve()
 * reject()
 *
 * when resolve() is called, the promise is presumed to be successful and whatever is between the arrows is returned and used as input for the then() method on the promise object.
 *
 * when reject() is caleld, the promise failed and the catch() method on the promise object is executed with the argument of the reject() function.
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

/**
 * Note: when we call a promise, we basically say: figure out what the value of the promise is, and when you know, execute one function if the promise was resolved or a diffrnet function if it was rejected. when a prmise is neither resolved or reject, we say that the promise is Pending.
 *
 * the() is a promise itself, so when it retruns we can use the result for the next then () instance. this means we can chain the then() instances..
 *
 *
 */

const Mypromise = new Promise((resolve, reject) => {
  reject("opps!");
})
  .then((value) => {
    console.log(value);
    return "we";
  })
  .then((value) => {
    console.log(value);
    return "can";
  })
  .then((value) => {
    console.log(value);
    return "chain";
  })
  .then((value) => {
    console.log(value);
    return "promises";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });

/**
 * 
 * Practice;
 * 
 * 1. Set up a Promise that resolves with a value of Start Counting.
2. Create a function named counter() that has one argument that gets the value
and outputs it into the console.
3. Set up the next function in the Promise with four then() instances, which should output a value into the counter function, and return a value which will provide input for the subsequent then() instance. The returned values should be one, then two, then three. The screen output in the console should be the following:
 */

const newPromise = new Promise((res, rej) => {
  res("start counting");

  function counter(value) {
    console.log(value);
  }
})
  .then((value) => {
    console.log(value);
    return "One";
  })
  .then((value) => {
    console.log(value);
    return "Two";
  })
  .then((value) => {
    console.log(value);
    return "Three";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });
