var vowels = 'aeiou';

module.exports = { 
	isVowel:function(character) {   
		
    	return vowels.indexOf(character) != -1;
  	}
};
