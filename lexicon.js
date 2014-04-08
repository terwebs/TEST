var translate = {
           "merry":"god", 
           "chrismas":"jul", 
           "and":"och", 
           "happy":"gott", 
           "new":"nytt", 
           "year":"år"     
      },

    translation = '';

    module.exports = {Translate:function(notranslated){
        var str = notranslated.split(" ");

        for(i = 0 ; i < str.length ; i++){
        translation += translate[str[i]] + " "; 
        }
        return translation;
        }
    };