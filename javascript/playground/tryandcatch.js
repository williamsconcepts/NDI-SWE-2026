/**
 * try...catch is used to handle error gracefully so your program doesnt crash.
 * 
 * syntax
 * try {
 *  // code that might throw an error
 * } catch (error) {
 *  // code that runs if an error occurs
 * }
 */

try {
    console.log(user)
} catch(error) {
    console.log("An error occured");
    // console.log(error.message);
    // console.log(error.name)
}

// console.log("program is still running")

// usiing throw

function checkAge(age) {
    try {
        if (age < 18) throw new Error("You must be at least 18 year old.");
        console.log("Access Granted");
        
    } catch (error) {
        console.log(error.message)
    }
 
}
checkAge(25)