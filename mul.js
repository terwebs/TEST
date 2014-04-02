
var mul=1;
module.exports = { Mul: function(numbers){

        for (var i=0; i<numbers.length; i++){
        mul *= numbers[i];
        }
        return mul;
	}
};