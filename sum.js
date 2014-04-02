
var sum=0;
module.exports = { Sum: function(numbers){

        for (var i=0; i<numbers.length; i++){
        sum += numbers[i];
        }
        return sum;
    }
};