// var numbers = [1,2,3,4],
sum=0;
module.exports = { Sum: function(numbers){

        for (var i=0; i<numbers.length; i++){
        sum += numbers[i];
        }
        return sum;
    }
};