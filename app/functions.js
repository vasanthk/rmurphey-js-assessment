exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray: function (fn, arr) {
    // 'this' is null here.
    return fn.apply(null, arr);
  },

  speak: function (fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function (str) {
    return function (arg) {
      return str + ', ' + arg;
    }
  },

  makeClosures: function (arr, fn) {
    var ret = [];

    var makeFn = function (val) {
      return function () {
        return fn(val);
      };
    };

    for (var i = 0; i < arr.length; i++) {
      ret.push(makeFn(arr[i]));
    }

    return ret;
  },

  partial: function (fn, str1, str2) {
    return function (str3) {
      return fn.call(null, str1, str2, str3);
    }
  },

  useArguments: function () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    return sum;
  },

  callIt: function (fn) {
    // Arguments are passed in along with the fn as well hence, splice it.
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, args);
  },

  partialUsingArguments: function (fn) {
    // Arguments are passed in along with the fn as well hence, splice it.
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function () {
      var moreArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, moreArgs);
    };
  },

  curryIt: function (fn) {

  }
};
