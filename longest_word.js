// Write a function findLongestWord() that takes an array of words and returns the length of the longest one
module.exports = {LongestWord:function(string) {
    var str = string.split(" "); // convierte en arreglo, separa por " "
    var longest = 0;
    var word; 
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) { 

            longest = str[i].length;
            word = str[i];
        }
    }
    return word.length;
    }
};
