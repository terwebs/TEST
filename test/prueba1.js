//Define a function max() that takes two numbers as arguments and returns the largest of them. 


var expect = require('chai').expect,
MaxNumber = require('../maxnumber'),
IsNumber = require('../isnumber');

var numbers =  [1, 8, 5, 'nada', 5];

describe('MaxNumber', function(){

	describe('#max', function(){


		
		var result = MaxNumber.max(numbers);


		it('returns maxnumber between a and b', function(){
			
			expect(result).to.be.equal(12);

			
		})



	});

});

describe('IsNumber', function(){

	describe('#isNumber', function(){

		var result = IsNumber.isNumber(numbers);

		it('should be all numbers', function(){

			expect(result).to.be.equal(true);
		})




	});

});