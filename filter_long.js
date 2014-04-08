var parser = require('./isnumber');

module.exports = { filterLongWords: function (words, i){
   var strwords = words.split(' '),
   u,
   temp = ''; 

   if (!parser.isNumber(i)) {
      return new TypeError('Invalid input: ' + i);
    }

   for(u = 0; u<strwords.length; u++){
 		if(strwords[u].length > i){
 			temp += strwords[u] + ' ';
 		}
   }
   return temp;
   }
};

