// File: Q1.3_insertArrays.js
// Description: File to insert three numbers into the sorted array
// Author: Roongroj Chumpon
// Date: 05/09/25

// Q1.3 Insert three numbers 19, 23, 30 into the sorted array above, and keep the new array in ascending order
const myArray = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
myArray.push(19, 23, 30);
console.log(myArray);

const sortedNumber = myArray.sort(function (a, b) {return a - b;});
console.log(sortedNumber);