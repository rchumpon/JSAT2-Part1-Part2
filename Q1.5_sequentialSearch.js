// File Q1.5_sequentialSearch.js
// Description: This file shows how linear search works
// Author: Roongroj Chumpon
// Date: 06/09/25

// Create an array to search.
const searchArray = [15, 70, 65, 30, 85, 90, 25, 40];
console.log(searchArray);

// Set the value we are searching for.
let key = 85;
console.log(`Key: ${key}`);

// Create the sequentialSearch function.
function sequentialSearch(array, value) {
  let found = -1;
  console.log(`Array to search: ${array}`);
  console.log(`Value to find: ${value}`);
  
  for (i = 0; i < array.length; i++){

    console.log(`array[${i}]: ${array[i]}`);

    if (array[i] == value){
      found = i;
      break;
    }
  }
  return found;
}

// Call our function
const result = sequentialSearch(searchArray, key);
if (result == -1) {
  console.log(`The key of ${key} was not found`);
} else {
  console.log(`The key of ${key} was found at index ${result}`);
}