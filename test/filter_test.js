// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

var expect = require('chai').expect,
	Filter = require('../filter_long');
	
describe('Filter', function(){

  describe('#filterLongWords', function(){
    it('takes an array of words and an integer i and returns the array of words that are longer than i.', function(){

      var words = 'que nota pelota',
      i = 5;
      result = Filter.filterLongWords(words,i);
      expect(result).to.be.equal('pelota ');
    });

    it('returns invalid input exception if i is not a number', function(){
      var words = 'que nota pelota',
      i = 'lol';
      result = Filter.filterLongWords(words,i);
      expect(result)
        .to
        .be
        .an
        .instanceOf(TypeError)
        .and
        .have
        .property('message', 'Invalid input: lol');
    });

  });

});