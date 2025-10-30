// File Q1.5_sequentialSearch.js
// Description: This file shows how linear search works
// Author: Roongroj Chumpon
// Date: 06/09/25
// Version: 1.0.1

// Create an array to search.
const searchArray = [15, 70, 65, 30, 85, 90, 25, 40];
console.log(searchArray);

// Set the value we are searching for.
let key = 85;
console.log(`Key: ${key}`);

// Create the sequentialSearch function to perform a sequential search.
function sequentialSearch(array, value) {
  // Initialize a variable named found with -1 to indicate "not found" by default.
  let found = -1;
  // Display the array and the search value for clarity.
  console.log(`Array to search: ${array}`);
  console.log(`Value to find: ${value}`);
  //Loop through each element in the array.
  for (i = 0; i < array.length; i++){
    // Show the current element being checked.
    console.log(`array[${i}]: ${array[i]}`); 
    // Compare the current element with the search value.
    if (array[i] == value){
      found = i; // Store the index where the value is found.
      break; // Stop searching once the value is found.
    }
  }
  /* Return the index where the value was found
  or -1 if not found.*/
  return found;
}

// Call our function
const result = sequentialSearch(searchArray, key);
// Display the result based on whether the key found or not
if (result == -1) {
  console.log(`The key of ${key} was not found`);
} else {
  console.log(`The key of ${key} was found at index ${result}`);
}