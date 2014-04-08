module.exports = {frequency: function(string) {
    var i,
    result = {};

    for(i = 0; i < string.length; i++) {
      if (result[string[i]]) {
        result[string[i]] += 1;

      } else {
        result[string[i]] = 1;
      }

    }
    return result;
  }
};