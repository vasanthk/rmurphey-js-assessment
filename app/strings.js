exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {

  },
  wordWrap: function (str, cols) {

  },
  reverseString: function (str) {
    var result = '';
    for (var i = str.length-1; i >= 0; i--) {
      result += str[i];
    }
    return result;

    // Simple One line answer
    // return str.split('').reverse().join('');
  }
};
