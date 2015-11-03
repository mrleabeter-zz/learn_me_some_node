var myModule = require('./06_my_module.js');

var callback = function(err, data) {
  if (err) {
    return console.error(err);
  } else {
    data.forEach(function (file) {
      console.log(file);
    })
  }
}

myModule(process.argv[2], process.argv[3], callback);