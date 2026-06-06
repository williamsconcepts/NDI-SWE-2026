/**
 * 
 * A built in function to run after a delay or repeatedly at intervals.
 * 
 * setTimeout()
 * setInterval()
 * clearTimeout()
 * clearInterval()
 * 
 * | Function        | What it does       |
| --------------- | --------------------- |
| `setTimeout`    | Runs once after delay |
| `setInterval`   | Runs repeatedly       |
| `clearTimeout`  | Cancels timeout       |
| `clearInterval` | Stops interval        |

 */

// Using the setTimout()

setTimeout(() => {
   // console.log("Hello after 5 seconds")
}, 5000);

function greet() {
   // console.log("Hi dear!")
}

setTimeout(greet, 3000);

// Using the setInterval()

const run = setInterval(() => {
    console.log("Runs every 2 seconds");
}, 2000);
// stopping setInterval() using clearInterval()
setTimeout(() => {
    clearInterval(run);
    console.log("i just stopped!")
}, 5000)

// stopping setInterval() using clearInterval()

const intervalId = setInterval(() => {
    //console.log("Running...");
}, 1000);

// stop after 5 seconds
setTimeout(() => {
    clearInterval(intervalId);
   // console.log("stopped!")
}, 5000)

// stop setTimeout() using clearTimeout()
const timeoutId = setTimeout(() => {
  //  console.log('this will not run')
    clearTimeout(timeoutId)
}, 3000)


// Countdown Timer

// let count = 10;

// const timer = setInterval(() => {
//     console.log(count);
//     count--;

//     if(count === 0) {
//         console.log("Done");
//         clearInterval(timer);
//     }
// }, 1000)

