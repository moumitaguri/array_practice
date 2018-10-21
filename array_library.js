//........checks a number even or odd.......
const isEven = function(number){
  return (number%2 == 0);
}

const isOdd = function(number){
  return (number%2 != 0);
}

//.......extracts even numbers from a given list of number......
const filterEven = function(numberList){
  return numberList.filter(isEven);
}

//.......extracts odd numbers from a given list of number......
const filterOdd = function(numberList){
  return numberList.filter(isOdd);
}


//......counts even numbers from a given number of list......
const countEvenNumbers = function(numberList) {
  return numberList.filter(isEven).length;
}


//......counts odd numbers from a given number of list......
const countOddNumbers = function(numberList) {
  return numberList.filter(isOdd).length;
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

//..
const isSmallerOrEqual = function(num1,num2) {
  return num1 <= num2;
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


//.... new array having numbers above a certain threshold.....
const numbersAboveThreshold = function(numbers,threshold) {
  let arrayAboveThreshold = [];
  for(number of numbers){
    if(isGreater(number,threshold)){
      arrayAboveThreshold.push(number);
    }
  }
  return arrayAboveThreshold;
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


//....numbers below a certain threshold.....
const numbersBelowThreshold = function(numbers,threshold) {
  let arrayBelowThreshold = [];
  for(number of numbers){
    if(isSmallerOrEqual(number,threshold)){
      arrayBelowThreshold.push(number);
    }
  }
  return arrayBelowThreshold;
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
  return -1
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
  let uniqueSet1 = unique(set1)
  let differenceSet = [];
  for(let element of uniqueSet1 ){
    if(!set2.includes(element)){
      differenceSet.push(element);
    }
  }
  return differenceSet;
}


//...Zip - insert elements from two arrays as follows:
const zip = function(set1,set2){
  let zipSet = [];
  for(let index=0;index <set2.length;index++){
    zipSet.push([set1[index],set2[index]]);
  }
  return zipSet;
}


//....Rotate - creates a new array by rotating elements from the given array.
const rotate = function(givenSet,rotatingPosition){
  let rotatedSet = givenSet;
  for(index = 0;index < rotatingPosition; index++){
    rotatedSet.push(givenSet[0]);
    rotatedSet.shift();
  }
  return rotatedSet;
}


//...Partition - Given an array of numbers, it returns a partitioned array consisting of numbers above a certain number and below a certain number

const partition = function(givenList,threshold){
  let partitioned = [];
  let belowThreshold = numbersBelowThreshold(givenList,threshold);
  let aboveThreshold = numbersAboveThreshold(givenList,threshold);
  partitioned.push(belowThreshold);
  partitioned.push(aboveThreshold);
  return partitioned;
}

//...Extract digits - Given a number, extract the digits of a number into an array
const extractDigits = function(givenNumber){
  let extracted = [];
  let givenNumInString = givenNumber.toString();
  for(digit=0;digit < givenNumInString.length; digit++){
    extracted.push(+givenNumInString[digit]);
  }
  return extracted;
}

//..Descending order - Given an array of numbers, check if the array is in descending order
const isInDecending = function(numbers){
  for(let index = 0;index < numbers.length-1; index++){
    if(numbers[index] < numbers[index+1]){
      return false;
    }
  }
  return true;
}

const isInAscending = function(numbers){
  for(let index = 0;index < numbers.length-1; index++){
    if(numbers[index] > numbers[index+1]){
      return false;
    }
  }
  return true;
}


const isSubset = function(array1,array2){
  let set1 = unique(array1);
  let set2 = unique(array2);
  for(let item of set2){
    if(!set1.includes(item)){
      return false;
    }
  }
  return true;
}



const reverseFib = function(term){
  let fibSeries = [];
  let prevTerm = -1;
  let nextTerm = 1;
  for(let termIndex = 0; termIndex < term; termIndex++){
    let fibTerm = (prevTerm+nextTerm);
    fibSeries.push(fibTerm);
    prevTerm = nextTerm;
    nextTerm = fibTerm;
  }
  return reverse(fibSeries);
}

  
module.exports = {
 isEven,
 filterEven,
 filterOdd,
 countEvenNumbers,
 countOddNumbers,
 mapLength,
 isGreater,
 isSmaller,
 countNumbersAbove,
 countNumbersBelow,
 intersect,
 selectEverySecondElement,
 reverse,
 findGreatest,
 findSmallest,
 findSum,
 findAverage,
 findIndexOf,
 unique,
 union,
 difference,
 zip,
 rotate,
 numbersAboveThreshold,
 numbersBelowThreshold,
 partition,
 extractDigits,
 isInDecending,
 isInAscending,
 isSubset,
 reverseFib,
};
