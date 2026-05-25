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

function celToFah(celsius, callback) {
    // multiply cel by 9/5 and add 32
    const fah = (celsius * (9 / 5)) + 32;

    // passing the result to the callback function
    callback(celsius, fah);
}

// callback function
function Result(celcuis, fah) {
    console.log(`${celcuis} in Celcuis is ${fah} fahrenheit`);
}

celToFah(27, Result);