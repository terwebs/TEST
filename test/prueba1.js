//Define a function max() that takes two numbers as arguments and returns the largest of them. 


var expect = require('chai').expect,
MaxNumber = require('../maxnumber'),
IsNumber = require('../isnumber');



describe('MaxNumber', function(){

	describe('#max', function(){


		
		


		it('returns maxnumber between a and b', function(){
			
			var numbers =  [1, 8, 5, 10, 5];
			result = MaxNumber.max(numbers),

			expect(result).to.be.equal(10);

			
		})



	});

});

describe('IsNumber', function(){

	describe('#isNumber', function(){

		

		it('should be all numbers', function(){

			var numbers =  [1, 8, 5, 'nada', 5],
			result = IsNumber.isNumber(numbers);

			expect(result).to.be.equal(true);
		})




	});

});