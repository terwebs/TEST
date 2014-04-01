var nums = '0123456789',
parsedNumber;

module.exports = { 
	isNumber:function(numbers) {   

		for (var i = 0; i < numbers.length; i++ ) {

		 	var parsedNumber = parseInt(numbers[i]);
            
		}
		return nums.indexOf(parsedNumber) != -1;
    	
  	}
};
