/**
 * Practice Project
 *
 * Password checker
 *
 * Using an array of allowed passwords, this exercise will create an application to check if one of these password string values exists in an array that lists all the accepted passwords. Set a Promise to check if the password is valid, and upon the result either resolve with the status of true or reject with the status of false. Return the check results.
 *
 * 1. Create an array of allowed passwords.
 *
 *  2. Create a login function that will check if the argument is a value that is included in the passwords array. You can use indexof() or the includes() method to check the array for a value and return a Boolean value of the result.
 *
 * 3. Add a function that returns a Promise. Using resolve and reject, return a JavaScript object with the Boolean of true or false to indicate the password validity status.
 *
 * 4. Create a function that checks the password, sending it to the login function, and using then() and catch(), outputs the result of either the rejected password or the resolved password.
 *
 * 5. Send several passwords, some within the array, others not, to the checker function.
 *
 */

// create an array of allowed passwords
const passwords = ["admin123", "welcome1", "javascript", "password2026"];

// create a login function to check if the password exists
const login = (password) => passwords.includes(password);

// create a function that returns a promise
const validatePass = (password) =>
  new Promise((res, rej) => {
    login(password)
      ? res({ status: true, message: "Password Accepted" })
      : rej({ status: false, message: "Password Rejected" });
  });
// write a function that checks the password
function checkPass(password) {
  validatePass(password)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
checkPass("admin123");
checkPass("yes677");
