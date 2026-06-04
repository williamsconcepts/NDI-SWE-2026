/**
 * 
 * The callstack is how javascript keeps track of function execution order;
 * 
 * Last in First Out - LIFO
 * 
 * Last function added - runs first
 * First function added - finishes last
 * 
 * Key Ideas to Remember

✔ Call stack tracks function execution
✔ Works in LIFO order
✔ One function runs at a time
✔ Functions are pushed and popped
✔ Errors like infinite recursion crash the stack

>> >> Understanding call stack helps you master:

Async JavaScript (promises, async/await)
Event loop
Debugging "why my code runs in this order"
Interview questions (very common)
 * 
 */

// Eg 1

function first() {
    console.log("First");
}

function second() {
    console.log("Second");
}
first();
second();

// Eg 2

function greet() {
    console.log("Hello");
}

function sayName() {
    greet()
    console.log("John");
}

sayName()

// stack overflow

function recursive() {
  //  recursive(); // maximum call stack exceeded
}
// recursive();

// callstack and execution context

function a() {
    b();
}

function b() {
    c();
}

function c() {
    console.log("Inside C")
}

a();