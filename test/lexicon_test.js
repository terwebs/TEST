// Represent a small bilingual lexicon as a Javascript object in the following fashion 
//{"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"}
// and use it to translate your Christmas cards from English into Swedish

var expect = require('chai').expect,
	Lexicon = require('../lexicon');
	
describe('Lexicon', function(){

  describe('#Translate', function(){
    it('translates the words into swedish', function(){

      var notranslated = 'merry chrismas and happy new year'
      result = Lexicon.Translate(notranslated);
      expect(result).to.be.equal('god jul och gott nytt år ');
    });

  });

});
