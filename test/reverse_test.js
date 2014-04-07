//Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

var expect = require('chai').expect,
	Reverse = require('../reverse');
	
describe('Reverse', function(){

  describe('#StringReverse', function(){
    it('should return the reverse of the sentence', function(){

      var string = 'saratoga'
      result = Reverse.StringReverse(string);

    expect(result).to.be.equal('agotaras');
    });

  });

});
