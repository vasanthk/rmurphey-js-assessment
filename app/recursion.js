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

  },

  fibonacci: function (n) {

  },

  validParentheses: function (n) {

  }
};
