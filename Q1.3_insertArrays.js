// File: Q1.3_insertArrays.js
// Description: File to insert three numbers into the sorted array
// Author: Roongroj Chumpon
// Date: 05/09/25
// Version: 1.0.0

// Q1.3 Insert three numbers 19, 23, 30 into the sorted array above, and keep the new array in ascending order

const myArray = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
// Add three new numbers to the end of the array using the push() method.
myArray.push(19, 23, 30);
// Output the updated array.
console.log(myArray);
// Sort the numbers in ascending order
const sortedNumber = myArray.sort(function (a, b) {return a - b;});
// Output the sorted array.
console.log(sortedNumber);