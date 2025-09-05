// File: Q1.2_sortedArrays.js
// Desciption: File to sort an array in ascending order
// Author: Roongroj Chumpon
// Date: 05/09/25


// Q1.2  Sort the array created in Q1.1 above in “ascending” order (ascending is smallest to largest)

// Define an array
const myArray = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

// Fix the incorrect sorting we can use a method as a parameter
const sortedNumber = myArray.sort(function (a, b) {return a - b;});
console.log(sortedNumber);
