//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


var expect = require('chai').expect,
IsVowel = require('../isvowel');

describe('IsVowel', function(){

	describe('#isVowel', function(){

		it('returns true if is vowel', function(){
			
			
			var character = 'o';
			var result = IsVowel.isVowel(character);

			expect(result).to.be.equal(true);

		
		})

	});

});