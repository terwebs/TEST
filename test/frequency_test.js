// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it.
// Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

var expect = require('chai').expect,
	Frequency = require('../frequency');
	
describe('Frequency', function(){

  describe('#frequency', function(){
    it(' builds a frequency listing of the characters contained in a string', function(){

      var string = 'que nota pelota que me diciembre';
      result = Frequency.frequency(string);
      expect(result).to.have.property('e').that.equals(6);
    });

  });

});