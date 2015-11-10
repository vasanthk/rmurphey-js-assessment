exports = (typeof window === 'undefined') ? global : window;

// TODO: Take this one: https://www.codecademy.com/courses/javascript-lesson-205/0/1
exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    var listOfFiles = [];
    var dirs = [];

    processDir(data);

    function processDir(dir) {
      var files = dir.files;

      dirs.push(dir.dir);

      for (var i = 0; i < files.length; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }

      // One you reach the end of the current directory tree - Pop it!
      dirs.pop();
    }

    return listOfFiles;
  },

  permute: function (arr) {
    // http://stackoverflow.com/a/11509565/54468
    var temp = [];
    var answer = [];

    return doIt(arr);

    function doIt(a) {
      var item;
      for (var i = 0; i < arr.length; i++) {
        // remove the item at index i
        item = arr.splice(i, 1)[0];

        // Add the item to the array we are building up
        temp.push(item);

        if (arr.length) {
          // If there's still anything left in the array
          // recurse over what is left
          doIt(arr);
        } else {
          // otherwiae, log the result and move on
          logResult();
        }

        // restore the item we removed at index i and remove it from our temp array
        arr.splice(i, 0, item);
        temp.pop();
      }

      return answer;
    }

    function logResult() {
      answer.push(
        // make a copy of temp using .slice()
        // so we can continue to work with temp
        temp.slice()
      );
    }
  },

  // For more check https://medium.com/@scottibiscotti1/calculating-the-nth-fibonacci-number-in-javascript-c3656250f626
  // TODO: CHekc if this can be simplified.
  fibonacci: function (n) {
    // Naive rerursive approach
    function fib(n) {
      return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }
    return fib(n)
  },

  validParentheses: function (n) {
    function nPair(n) {
      if (n == 0)
        return [""];

      var result = [];
      for (var i = 0; i < n; ++i) {
        var lefts = nPair(i);
        var rights = nPair(n - i - 1);

        for (var l = 0; l < lefts.length; ++l)
          for (var r = 0; r < rights.length; ++r)
            result.push("(" + lefts[l] + ")" + rights[r]);
      }

      return result;
    }

    return nPair(n);
  }
};
