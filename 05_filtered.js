// Refactored version after seeing the answer
var fs = require('fs');
var path = require('path');
var fileLocation = process.argv[2];
var fileExtension = process.argv[3];

fs.readdir(fileLocation, function(err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + fileExtension)
      console.log(file);
  })
})



// // First ghetto version that got me through to the answer:
// var fs = require('fs');
// var fileLocation = process.argv[2];
// var fileExtension = process.argv[3];

// fs.readdir(fileLocation, function(err, list) {
//   if (err) {
//     return console.error(err);
//   } else {
//     var fileExtensionRegexp = new RegExp('.+\.' + fileExtension + '$');
//     list.filter(function(elem) {
//       return fileExtensionRegexp.test(elem);
//     }).forEach(function(elem) {
//       console.log(elem);
//     });
//   }
// });