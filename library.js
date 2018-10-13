//........checks a number even or odd.......
const isEven = function(number){
  return (number%2 == 0);
}


//.......extracts even numbers from a given list of number......
const selectEven = function(numbers){
  let even = [];
  for(let number of numbers){
    if(isEven(number)){
      even.push(number);
    }
  }
    return even;
 }


//.......extracts odd numbers from a given list of number......
const selectOdd = function(numbers){
  let odd = [];
  for(let number of numbers){
    if(isEven(number)==false){
      odd.push(number);
    }
  }
    return odd;
 }


//......counts even numbers from a given number of list......
const countEvenNumbers = function(numbers) {
  let countEven = 0;
  for(let number of numbers){
    if(isEven(number)){
      countEven++;
    }
  }
  return countEven;
}



//......counts odd numbers from a given number of list......
const countOddNumbers = function(numbers) {
  let countOdd = 0;
  for(let number of numbers){
    if(isEven(number)==false){
      countOdd++;
    }
  }
  return countOdd;
}


//.....maps lengths of of every names of the given list and puts in another array....
const mapLength = function(elements) {
  let elementLengths = [];
  for ( let element of elements ){
    elementLengths.push(element.length);
  }
  return elementLengths;
}


//....checks if the 1st number is greater than the 2nd one...
const isGreater = function(num1,num2) {
  return num1 > num2;
}



//....counts how many numbers above a certain threshold.....
const countNumbersAbove = function(numbers,threshold) {
  counterAboveThreshold = 0;
  for(number of numbers){
    if(isGreater(number,threshold)){
      counterAboveThreshold++;
    }
  }
  return counterAboveThreshold;
}



exports.isEven = isEven;
exports.selectEven = selectEven;
exports.selectOdd = selectOdd;
exports.countEvenNumbers = countEvenNumbers;
exports.countOddNumbers = countOddNumbers;
exports.mapLength = mapLength;
exports.isGreater = isGreater;
exports.countNumbersAbove = countNumbersAbove;
