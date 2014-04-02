var vowels = 'aeiou ';  
  
module.exports = { 
  translate:function(word){
    var
       i,
       temp, // variable temporal
       sentence = '', // variable para guardar la oracion
       wordArray = word.split(''); // convierte "word" en un arreglo
 
    for(i = 0; i < wordArray.length; i++) {  // compara cada posicion del arreglo word
      temp = wordArray[i];  // guarda en temp la posicion de cada arreglo, ( si es hola, guarda "h" en temp )
      if (isVowel(temp)) {  // si temp es una vocal 
        sentence += temp; // agregar en la oracion esa vocal 
        continue;
      }
 
      sentence += temp + 'o' + temp; // si no es vocal, agregar en la oracion: la no vocal + o + no vocal (temp = l , lol)
    }
 
    return sentence; // retornar la oracion
  }
};
 
function isVowel(character) {   // funcion para saber si la letra es vocal o no
  return vowels.indexOf(character) != -1;
}
