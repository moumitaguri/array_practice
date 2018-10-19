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
    if(!isEven(number)){
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


//....checks if the 1st number is smaller than the 2nd one...
const isSmaller = function(num1,num2) {
  return num1 < num2;
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


//....counts how many numbers below a certain threshold.....
const countNumbersBelow = function(numbers,threshold) {
  counterBelowThreshold = 0;
  for(number of numbers){
    if(isSmaller(number,threshold)){
      counterBelowThreshold++;
    }
  }
  return counterBelowThreshold;
}


//....generate a new array consisting of unique elements that are contained in both arrays.
const intersect = function(numberSet1,numberSet2) {
  let intersectionSet = [];
  for( number of numberSet1 ){
    if(numberSet2.indexOf(number) != -1){
      intersectionSet.push(number);
    }
  }
  return intersectionSet;
}


//....select every second element from an given array and put them in another array...
const selectEverySecondElement = function(givenNumberSet){
  let extractedSecondElements = [];
  for( let number = 1; number < givenNumberSet.length; number=number+2){
    extractedSecondElements.push(givenNumberSet[number]);
  }
  return extractedSecondElements;
}


//....print the given array in reverse order...
const reverse = function(givenSet){
  let reversedSet = [];
  for(let element = givenSet.length-1; element >= 0;element--){
    reversedSet.push(givenSet[element]);
  }
  return reversedSet;
}


//.....find greatest number in a list....
const findGreatest = function(givenList){
  let greatest = givenList[0];
  for(number of givenList){
    if(isGreater(number,greatest)){
      greatest = number;
    }
  }
  return greatest;
}



//.....find smallest number in a list....
const findSmallest = function(givenList){
  let smallest = givenList[0];
  for(number of givenList){
    if(isSmaller(number,smallest)){
      smallest = number;
    }
  }
  return smallest;
}


//....find sum of a list of numbers...
const findSum = function(numberList){
  let sum = 0;
  for(number of numberList){
    sum = sum + number;
  }
  return sum;
}



//.....find average of a list of numbers...
const findAverage = function(numberList){
  return findSum(numberList)/numberList.length;
}



//...Index Of a Number - Given an array of numbers find the first position of a specified number
const findIndexOf = function(numberList,numberToFind){
  for(let number in numberList){
    if(numberList[number] == numberToFind){
      return number;
    }
  }
}


//.....Unique - Given an array, remove duplicate elements and return an array of only unique elements.
const unique = function(givenSet){
  let uniqueSet = [];
  for(let element of givenSet){
    if(uniqueSet.indexOf(element) == -1){
      uniqueSet.push(element);
    }
  }
  return uniqueSet;
}

//....Union - Given two arrays, generate a new array consisting of unique elements across both those arrays.
const union = function(set1,set2){
  let unionSet = unique(set1);
  for(let element of set2){
    if(unionSet.indexOf(element) == -1){
      unionSet.push(element);
    }
  }
  return unionSet;
}


//...Difference - Given two arrays, generate a new array that consists of unique elements that are present in the first array, but not in the second.
const difference = function(set1,set2){
  let unisueSet1 = unique(set1)
  let differenceSet = [];
  for(let element of unisueSet1 ){
    if(!set2.includes(element)){
      differenceSet.push(element);
    }
  }
  return differenceSet;
}

















  
exports.isEven = isEven;
exports.selectEven = selectEven;
exports.selectOdd = selectOdd;
exports.countEvenNumbers = countEvenNumbers;
exports.countOddNumbers = countOddNumbers;
exports.mapLength = mapLength;
exports.isGreater = isGreater;
exports.isSmaller = isSmaller;
exports.countNumbersAbove = countNumbersAbove;
exports.countNumbersBelow = countNumbersBelow;
exports.intersect = intersect;
exports.selectEverySecondElement = selectEverySecondElement;
exports.reverse = reverse;
exports.findGreatest = findGreatest;
exports.findSmallest = findSmallest;
exports.findSum = findSum;
exports.findAverage = findAverage;
exports.findIndexOf = findIndexOf;
exports.unique = unique;
exports.union = union;
exports.difference = difference;
