module.exports = {
	max:function(numbers) {

		var orderedNumbers = numbers.sort(function(a,b){
			return a-b;
		});

		return orderedNumbers[orderedNumbers.length-1];
	}
};