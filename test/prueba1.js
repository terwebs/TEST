//Define a function max() that takes two numbers as arguments and returns the largest of them. 


var expect = require('chai').expect,
MaxNumber = require('../maxnumber');

describe('MaxNumber', function(){

	describe('#max', function(){

		it('returns maxnumber between a and b', function(){
			var a=4, b=1;

			var result = MaxNumber.max(a,b);

			expect(result).to.be.equal(4);

		})

	});

});