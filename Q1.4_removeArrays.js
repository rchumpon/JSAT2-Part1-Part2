// File: Q1.4_removeArrays.js
// Description: File to remove two numbers from the array
// Author: Roongroj Chumpon
// Date: 06/09/25

// Q1.4 Remove two numbers 8, 31 from the array generated in Q1.3, and keep the new array in ascending order.

const myArray = [3, 5, 8, 11, 14, 16, 19, 20, 23, 25, 30, 31];
// romove 31 at index 11
myArray.splice(11, 1);
//remove 8 at index 2
myArray.splice(2, 1);

console.log(myArray);