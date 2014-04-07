module.exports = { 
	isNumber:function(numbers) {   

//function isNumber(numbers){
		for (var i = 0; i < numbers.length; i++ ) { 
      if (isNaN(parseInt(numbers[i]))) { 
        return false;
			}
		} 
    return true; 
  }
 };
