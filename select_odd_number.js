const selectOdd = require('./library.js').selectOdd;
const main = function() {
  let numberList = process.argv[2];
  numberList = numberList.split(",");
  console.log(selectOdd(numberList));
}

main();
