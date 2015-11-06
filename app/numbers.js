exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    // TODO: Someone explain what this is. I don't get it :(
    return 1 & (num >> (bit -1));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    // Convert an eight-bit number to a binary string
    // No idea :(

  },

  multiply: function(a, b) {
    // No idea :(
  }
};
