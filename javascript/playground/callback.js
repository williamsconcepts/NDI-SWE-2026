
// Simple callback function
function greet(name, callback) {
    console.log(`Hello ${name}`);

    callback();
}

function sayBye() {
    console.log("Goodbye");
}

greet("Ebube", sayBye);


// Passing Arguments to callback functions
function cal(num1, num2, callback) {
    const result = num1 + num2;

    callback(result);
}

function displayresult(result) {
    console.log(`The Answer is ${result}`);
}

cal(4, 6, displayresult)