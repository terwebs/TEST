// var numbers = [1,2,3,4],
mul=1;
module.exports = { Mul: function(numbers){

        for (var i=0; i<numbers.length; i++){
        mul *= numbers[i];
        }
        return mul;
	}
};