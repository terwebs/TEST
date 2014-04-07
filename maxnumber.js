var parser = require('./isnumber');

module.exports = {
	max:function(numbers) {
    if(parser.isNumber(numbers)) {

      var orderedNumbers = numbers.sort(function(a,b){
        return a-b;
      });

      return orderedNumbers[orderedNumbers.length-1];

    } else {
      return new TypeError('Invalid input: ' + numbers);
    }
	}
};
