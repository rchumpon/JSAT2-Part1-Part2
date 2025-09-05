// File Q1.6_binarySearch.js
// Description: This file shows how binary search works
// Author: Roongroj Chumpon
// Date: 06/09/25

// Create array to search
const sortedArray = [2, 6, 12, 18, 32, 48, 56, 60, 72,];
console.log(sortedArray)

// Set the value we are searching for.
const key = 48;
console.log(`Key: ${key}`);

// Create the binarySearch function
// Parameters: Array to search and the key to be found.
// Return: the index of the element of -1 if not found.
function binarySearch(array, value){
  let found = -1;
  console.log(`Array to search: ${array}`);
  console.log(`Value to find: ${value}`);

  // Initialize the start and end points.
  let start = 0;
  let end = array.length - 1;
  console.log(`Start: ${start}, End: ${end}`);

  // Loop through the array while the start does not meet the end.
  while (start <= end){
    // find the mid point
    let mid = Math.floor((start + end) / 2);
    console.log(`Mid: ${mid}`);

    // Test if the element is present at the mid point.
    if(array[mid] == value){
      console.log(`Array[${mid}]: ${array[mid]}`);
      found = mid;
      break;
    } else if (array[mid] < value){
      // look at the right side of the array
      console.log(`Array[${mid}]: ${array[mid]}`);
      start = mid + 1;
      console.log(`Start: ${start}: End: ${end}`)
    } else {
      // look at the left side of the array
      console.log(`Array[${mid}]: ${array[mid]}`);
      end = mid - 1;
      console.log(`Start: ${start}, ${end}`);

    }
  }
  return found;
}
// Calling the function with 2 parameters.
const result = binarySearch(sortedArray, key);
// Output our results
if (result == -1){
  console.log(`The key of ${key} was not found.`);
} else {
  console.log(`The key of ${key} was found at index ${result}`);
}


