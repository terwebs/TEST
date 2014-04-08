// Write a function findLongestWord() that takes an array of words and returns the length of the longest one
module.exports = {LongestWord:function(string) {
    var str = string.split(" "); // convierte en arreglo, separa por " " ejemplo ('me diciembre') >> ["me", "diciembre"]
    var longest = 0; // inicia longest en 0
    for (var i = 0; i < str.length; i++) {  // compara los elementos del arreglo "me" y "diciembre"
        if (longest < str[i].length) {  // si longest es menor que str[i] el elemento en al pos i

            longest = str[i].length; // guarda el tamano actual de ese elemento n el arreglo
                    }
    }
    return longest; // regresa longest con el ultimo valor
    }
};
