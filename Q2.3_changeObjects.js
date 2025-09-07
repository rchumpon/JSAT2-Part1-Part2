// File: Q2.3_changeObjects.js
// Description: File to show how to change the data of the properties to the object called myMovie.
// Author: Roongroj Chumpon
// Date: 08/09/25

let myMovie = {
  'Title' : 'The longest day',
  'Year' : 1964
};
console.log(myMovie);

myMovie.Rating = 5;
myMovie.Summary = 'World War II movie about the Normandy landings';
console.log(myMovie);

// Change data of the properties
myMovie.Rating = 4;
myMovie.Year = 1962;
console.log(myMovie);