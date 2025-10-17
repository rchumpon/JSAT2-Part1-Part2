// File: Q2.2_addObjects.js
// Description: File to show how to add properties to the object called myMovie.
// Author: Roongroj Chumpon
// Date: 08/09/25
// Version: 1.0.0

// Create an object called myMovie with two properties: Title and Year.
let myMovie = {
  'Title' : 'The longest day',
  'Year' : 1964
};
console.log(myMovie);
// Adding data of the properites
myMovie.Rating = 5;
myMovie.Summary = 'World War II movie about the Normandy landings';
// Display the updated object.
console.log(myMovie);
