var arraySum = 0

for (var i = 2; i < process.argv.length; i++) {
  arraySum += Number(process.argv[i]);
}

console.log(arraySum)