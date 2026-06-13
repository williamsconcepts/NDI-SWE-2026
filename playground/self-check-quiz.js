/**
 * 1. Fix the error in the following code to use the callback function:
 
function addOne(val){
  return val + 1;
}
function total(a, b, callback){
  const sum = a + b;
  return callback(sum);
}
console.log(total(4, 5, addOne()));

solution;
By writing addOne(), you are calling the function immediately and passing its return value (NaN in this case because no argument was supplied) instead of passing the function itself as a callback.

You should pass the function without parentheses.
 */

function addOne(val) {
  return val + 1;
}
function total(a, b, callback) {
  const sum = a + b;
  return callback(sum);
}
console.log(total(4, 5, addOne));

// Write down the result of the following code:
function checker(val) {
  return new Promise((resolve, reject) => {
    if (val > 5) {
      resolve("Ready");
    } else {
      reject(new Error("Oh no"));
    }
  });
}
checker(5)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("done");
  });

//update the code to return a promise
function myFun(val) {
  return new Promise((res, rej) => {
    res("Hello");
  });
}

myFun().then(
  function (val) {
    console.log(val);
  },
  function (err) {
    console.log(err);
  },
);
