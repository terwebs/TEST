var 
  expect = require('chai').expect,
  MaxNumber = require('../maxnumber');

describe('MaxNumber', function(){

	describe('#max', function(){

		it('returns maxnumber whithin the array', function(){
			
			var 
        numbers =  [1, 8, 5, 10, 5],
        result = MaxNumber.max(numbers);

			expect(result).to.be.equal(10);
			
		});

		it('returns maxnumber whithin the array using negative numbers', function(){
			
			var 
        numbers =  [1, 8, 5, -10, 5],
        result = MaxNumber.max(numbers);

        expect(result).to.be.equal(8);
			
		});

		it('returns maxnumber whithin the array using a null value', function(){
			
			var 
        numbers =  [1, 8, 5, null, 5],
        result = MaxNumber.max(numbers);

        expect(result)
          .to
          .be
          .an
          .instanceOf(TypeError)
          .and
          .have
          .property('message', 'Invalid input: 1,8,5,,5');
			
		});

		it('returns maxnumber whithin the array using a string value', function(){
			
			var 
        numbers =  [1, 8, 5, 'null', 5],
        result = MaxNumber.max(numbers);

        expect(result)
          .to
          .be
          .an
          .instanceOf(TypeError)
          .and
          .have
          .property('message', 'Invalid input: 1,8,5,null,5');
			
		});
	});
});
