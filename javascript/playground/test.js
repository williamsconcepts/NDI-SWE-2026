// Function to convert celsuis to fahrenheit

// function celToFah(celsius) {
//     // multiply cel by 9/5 and add 32
//     const fah = (celsius * (9 / 5)) + 32;

//     // Return the result
//     return fah;
// }
// const result = celToFah(27);
// console.log(result)

// Function to convert celsuis to fahrenheit using callback functions

// function celToFah(celsius, callback) {
//     // multiply cel by 9/5 and add 32
//     const fah = (celsius * (9 / 5)) + 32;

//     // passing the result to the callback function
//     callback(celsius, fah);
// }

// // callback function
// function Result(celcuis, fah) {
//     console.log(`${celcuis} in Celcuis is ${fah} fahrenheit`);
// }

// celToFah(27, Result);






// Arrow functions

const sub = (a,b) => {
    return a - b
}
console.log("Result is ", sub(14, 5));


const add = (a,b) => {
    return a + b;
}


// Arrow function implicit return
const add2 = (a,b) => a + b;

console.log("Add", add(2, 4));
console.log("Add2", add(2, 4));

function celc(celcuis) {
    const result = (celc * (9/5)) + 32
    return result
}

const celToFah = celc => ((celc * (9/5)) + 32);




const age = 18;
 
if (age < 18) {
    console.log("Access denied");
} else {
    console.log("Access granted");
}

(age < 18) ? console.log("Access denied") : console.log("Access Allowed")

const score = 40;

