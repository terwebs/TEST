//Define a function max() that takes two numbers as arguments and returns the largest of them. 


var expect = require('chai').expect,
MaxNumber = require('../maxnumber');

describe('MaxNumber', function(){

	describe('#max', function(){

		it('returns maxnumber between a and b', function(){
			var numbers = [5,4,6,7,4,3,2,20,15,25];

			var result = MaxNumber.max(numbers);

			expect(result).to.be.equal(25);

		})

	});

});