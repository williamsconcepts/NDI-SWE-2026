/**
 * Event Loop
 *
 * Javascript is a single threaded language, a thread in this context means, a path of execution, if there is only a single path, this mans that tasks will wait for one another and only one thing can happen at a time.
 *
 * This single executor is the event loop. its the process that executes the actual work.
 */

/**
 * Call stack and Callback queue
 *
 * Javascript works with a call stack,and all the actions that it has to execute are queued up here, the event loop is a pprocess that is constantly monitioring the call stack, and whenever there are tasks to do, the event loop does them one by one, the tasks on top gets executed first.
 */

// No multithreading
// console.log("Hi dear");
// add(5, 6);

// function add(x, y) {
//   return x + y;
// }
// with multithreading
console.log("This works");
setTimeout(() => console.log("Sorry i'm late"), 0);
console.log(add(4, 5));

function add(x, y) {
  return x + y;
}
