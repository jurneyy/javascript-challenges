var readlineSync = require('readline-sync');
//require loads npm package "readline"

var ordinal = function(digit) {
	var digitNum = Number(digit);
	//convert the value & store it in variable "digitNum"
	var lastDigit = digitNum % 10;
	//calculate modulo using the last digit % 10
  var lastTwoDigits = digitNum % 100;

  if (lastTwoDigits > 10 && lastTwoDigits < 20) {
    return digit + "th";
  }
  else if (lastDigit === 1) {
    return digit + "st";
  }
  else if (lastDigit === 2) {
    return digit + "nd";
  }
  else if(lastDigit === 3) {
    return digit + "rd";
  }
  else {
    return digit + "th";
  }
  	return lastDigit;
}

var input = readlineSync.question('Enter a digit:');
//promts user to enter a number.

var value = ordinal(input);

console.log(value);


