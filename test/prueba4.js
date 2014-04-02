/* Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers.
   For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. */

var expect = require('chai').expect,
    Sum = require('../sum'),
    Mul = require('../mul');

describe('Sum', function(){

  describe('#Sum', function(){

    it('returns the sum of the array', function(){

      var numbers =  [1,2,3,-4,5];
      result = Sum.Sum(numbers);

      expect(result).to.be.equal(7);

    });

  });

});

