// File: Q2.3_changeObjects.js
// Description: File to show how to change the data of the properties to the object called myMovie.
// Author: Roongroj Chumpon
// Date: 08/09/25
// Version: 1.0.0


// Create an object called myMovie with two properties: Title and Year
let myMovie = {
  'Title' : 'The longest day',
  'Year' : 1964
};
console.log(myMovie);
// Add new properties to the object.
myMovie.Rating = 5;
myMovie.Summary = 'World War II movie about the Normandy landings';
// Display the updated object after adding new properties.
console.log(myMovie);

// Change data of the properties
myMovie.Rating = 4;
myMovie.Year = 1962;
// Display the object again to show the updated object.
console.log(myMovie);