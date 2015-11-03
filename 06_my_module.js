var fs = require('fs');
var path = require('path');

module.exports = function(fileLocation, fileExtension, callback) {
  fs.readdir(fileLocation, function(err, list) {
    if (err) {
      return callback(err);
    } else {
      var fileArray = [];
      list.forEach(function (file) {
        if (path.extname(file) === '.' + fileExtension) {
          fileArray.push(file);
        }
      })
      callback(null, fileArray);
    }
  })
}