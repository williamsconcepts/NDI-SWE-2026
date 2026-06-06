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

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operations successful!");
  } else {
    reject("Something went wrong!");
  }
});

myPromise
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
