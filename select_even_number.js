const selectEven = require('./library.js').selectEven;
const main = function() {
  let numberList = process.argv[2];
  numberList = numberList.split(",");
  console.log(selectEven(numberList));
}

main();
