var parser = require('./isnumber');

module.exports = { 
  mul: function(numbers){
    var 
      i, 
      mul = 1;

    if (!parser.isNumber(numbers)) {
      return new TypeError('Invalid input: ' + numbers);
    }

    for (i = 0; i < numbers.length; i++){
      mul *= numbers[i];
    }

    return mul;
  }

};
