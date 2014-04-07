 module.exports = {
  StringReverse:function(string) {
    return string.split('').reverse().join(''); 
    //string.split() creates an array by breaking a string into pieces. 
    //reverse() method reverses the order of the elements of an array and returns the reversed array
    // join() converts all the elements of an array to strings and concatenates them
    }
};