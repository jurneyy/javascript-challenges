var readlineSync = require('readline-sync');
//require loads npm package "readline"

var degrees = readlineSync.question('Enter degrees in fahrenheit: ');
//stores user input in "degrees"

var degreesNum = Number(degrees);
//converts the value from a string to a number

var degreesCelsius = (degreesNum - 32) * 5/9;
//formula to convert Fahrenheit to Celsius

console.log('It is ' + degreesCelsius + ' degrees Celsius!');
//displays the answer