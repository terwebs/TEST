/* Write a function translate() that will translate a text into "rövarspråket".
 That is, double every consonant and place an occurrence of "o" in between.
 For example, translate("this is fun") should return the string "tothohisos isos fofunon" */


var expect = require('chai').expect,
Translate = require('../translate');

describe('Translate', function(){

	describe('#translate', function(){

		it('translates a text into rövarspråket', function(){
			
			
			var word = 'hola',
			result = Translate.translate(word);

			expect(result).to.be.equal('hoholola');

		
		})

	});

});