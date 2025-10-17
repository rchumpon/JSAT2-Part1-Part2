// File: Q2.4_removeObjects.js
// Description: File to show how to remove the data of the properties
// Author: Roongroj Chumpon
// Date: 08/09/25
// Version: 1.0.0

// Create an object called myMovie with four properties.
let myMovie = {
  'Title' : 'The longest day',
  'Year' : 1964,
  'Rating' : 5,
  'Summary' : "World War II movie about the Normandy landings"
};
// Output the object.
console.log(myMovie);

// Use the delete operator to remove a property.
delete myMovie.Summary;
// Display the updated object.
console.log(myMovie);