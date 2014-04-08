// Write a function findLongestWord() that takes an array of words and returns the length of the longest one

var expect = require('chai').expect,
	LongestWord = require('../longest_word');
	
describe('LongestWord', function(){

  describe('#LongestWord', function(){
    it('takes an array of words and returns the length of the longest one', function(){

      var string = 'merry chrismas and happy new year';
      result = LongestWord.LongestWord(string);
      expect(result).to.be.equal(8);
    });

  });

});