//Define a function max() that takes two numbers as arguments and returns the largest of them. 


var expect = require('chai').expect,
    MaxNumber = require('../maxnumber'),
    IsNumber = require('../isnumber');




describe('IsNumber', function(){

  describe('#isNumber', function(){
    it('should be all numbers', function(){

      var numbers =  [1, 8, null, 7, 5],
      result = IsNumber.isNumber(numbers);

    expect(result).to.be.equal(false);
    });

  });

});
