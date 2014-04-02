var expect = require('chai').expect,
    Mul = require('../mul');

describe('Mul', function(){

  describe('#mul', function(){

    it('returns the multiplication of all numbers in the array', function(){
      var numbers =  [1,2,-3,4],
      result = Mul.mul(numbers);

      expect(result).to.be.equal(-24);
    });

    it('returns invalid input exception if array contains NaN', function(){
      var numbers =  [1,'NaN',4],
      result = Mul.mul(numbers);

      expect(result)
        .to
        .be
        .an
        .instanceOf(TypeError)
        .and
        .have
        .property('message', 'Invalid input: 1,NaN,4');
    });

    it('returns invalid input exception if array contains null', function(){
      var numbers =  [1,null,4],
      result = Mul.mul(numbers);

      expect(result)
        .to
        .be
        .an
        .instanceOf(TypeError)
        .and
        .have
        .property('message', 'Invalid input: 1,,4');
    });

  });

});
