// function to cal age
function calAge(year, currYear, callback) {
  const dadAge = currYear - year;

  //pass the cal age t the callback function
  callback(dadAge);
}

// callback function
calAge(1958, 2026, function (dadAge) {
  const myAge = 28;

  console.log("My Dad is " + dadAge + " years old");
  console.log("My Dad was " + (dadAge - myAge) + " years old when i was born.");
});

//call function
// calAge(1958, 2026, result);

// Function to calculate conception and birth month
function babyCalculator(conceptionMonth) {
  // Array of months
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Find the index of the conception month
  const conceptionIndex = months.indexOf(conceptionMonth);

  // Add 9 months for due date
  const birthIndex = (conceptionIndex + 9) % 12;

  // Get the birth month
  const birthMonth = months[birthIndex];

  // Print result
  console.log(`Sex Month: ${conceptionMonth}`);
  console.log(`Expected Birth Month: ${birthMonth}`);
}

// Example usage
babyCalculator("May");
