// File: Q2.4_removeObjects.js
// Description: File to show how to remove the data of the properties
// Author: Roongroj Chumpon
// Date: 08/09/25

let myMovie = {
  'Title' : 'The longest day',
  'Year' : 1964,
  'Rating' : 5,
  'Summary' : "World War II movie about the Normandy landings"
};

console.log(myMovie);

//Remove the properties
delete myMovie.Summary;
console.log(myMovie);