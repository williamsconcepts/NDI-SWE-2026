/**
 * Rest parameter
 *
 * Similar to the spread, it has the same symbol but it is used inside the function parameter list.
 *
 */

// without rest opeator
function someFunc(param1, param2) {
  console.log(param1, param2);
}
someFunc("hi", "There", "How are you?");

// using rest operator
function someFunct(param1, ...param2) {
  console.log(param1, param2);
}
someFunct("hi", "There", "How are you?");

// useful when you are not sure of the argument you will get, it allows you process number of arguments
