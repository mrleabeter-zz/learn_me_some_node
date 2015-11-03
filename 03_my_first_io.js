var fs = require('fs');

var fileContent = fs.readFileSync(process.argv[2]);
var lineCount = fileContent.toString().split('\n').length - 1;

console.log(lineCount);