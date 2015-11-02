exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    if(Array.prototype.indexOf) {
      return arr.indexOf(item);
    } else {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          return i;
        }
      }
      return -1;
    }
  },

  sum : function(arr) {
    var sum = 0;
    for(var i=0; i< arr.length; i++) {
      sum +=arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    // Returns a NEW ARRAY
    return arr.filter(function(val) {
      return val !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    // Modifies the ORIGINAL array.
    // If it is ok to use a new result array, use filter() then.
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        arr.splice(i, 1);
        i--; // move index pointer back to removed item index.
      }
    }
    return arr;
  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
