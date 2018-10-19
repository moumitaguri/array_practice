const assert = require('assert');
const lib = require('./array_library.js');

assert.equal(lib.isEven(3),false);
assert.equal(lib.isEven(4),true);
assert.deepEqual(lib.selectEven([]),[]);
assert.deepEqual(lib.selectEven([1]),[]);
assert.deepEqual(lib.selectEven([1,2,-2,0]),[2,-2,0]);


assert.deepEqual(lib.selectOdd([1]),[1]);
assert.deepEqual(lib.selectOdd([4]),[]);
assert.deepEqual(lib.selectOdd([1,2,-2,0,-3,3,5,4]),[1,-3,3,5]);



assert.equal(lib.countEvenNumbers([]),0);
assert.equal(lib.countEvenNumbers([1,0,2]),2);


assert.equal(lib.countOddNumbers([]),0);
assert.equal(lib.countOddNumbers([1,0,2]),1);
assert.equal(lib.countOddNumbers([0,-2,4,3,-1]),2);

assert.deepEqual(lib.mapLength([""]),[0]);
assert.deepEqual(lib.mapLength(["saturday"]),[8]);
assert.deepEqual(lib.mapLength(["sunday","monday"]),[6,6]);
assert.deepEqual(lib.mapLength(["sunday","monday",""]),[6,6,0]);


assert.equal(lib.isGreater(1,2),false);
assert.equal(lib.isGreater(5,2),true);
assert.equal(lib.isGreater(-1,2),false);

assert.equal(lib.isSmaller(1,2),true);
assert.equal(lib.isSmaller(5,2),false);
assert.equal(lib.isSmaller(-1,2),true);

let set1 = [2,2];
let set2 = [2,1,3];
let set3 = [2,-1,-2,0];
assert.equal(lib.countNumbersAbove(set1,2),0);
assert.equal(lib.countNumbersAbove(set2,1),2);
assert.equal(lib.countNumbersAbove(set3,-1),2);

assert.equal(lib.countNumbersBelow(set1,2),0);
assert.equal(lib.countNumbersBelow(set2,2),1);
assert.equal(lib.countNumbersBelow(set3,2),3);

numberSet1 = [1,5,6,7,4,3,9,2];
numberSet2 = [1,4,2,3,0,9];
expected = [1,4,3,9,2];
assert.deepEqual(lib.intersect(numberSet1,numberSet2),expected);

//....select every second element from an given array and put them in another array...
set1 = [0,1];
expected1 = [1];
set2 = [2,3,4,6,1,5];
expected2 = [3,6,5];
assert.deepEqual(lib.selectEverySecondElement(set1),expected1);
assert.deepEqual(lib.selectEverySecondElement(set2),expected2);


//....print the given array in reverse order...
input = [1,3,4,5,6,2,4,1]
expected = [1,4,2,6,5,4,3,1]
assert.deepEqual(lib.reverse(input),expected);

input = ["jan","feb","mar","apr"];
expected = ["apr","mar","feb","jan"];
assert.deepEqual(lib.reverse(input),expected);


//....print fibonacci series in reverse order...



//....find greatest number in a list...
assert.equal(lib.findGreatest([]),);
assert.equal(lib.findGreatest([3,5,7]),7);
assert.equal(lib.findGreatest([1,1]),1);

//....find smallest number in a list...
assert.equal(lib.findSmallest([]),);
assert.equal(lib.findSmallest([3,5,7]),3);
assert.equal(lib.findSmallest([1,1]),1);
assert.equal(lib.findSmallest([26,3,1,5]),1);



//....sum of a list of numbers....
numbers = [1,2,3,4,5,6,7,8,9,10];
expectedSum= 55;
assert.equal(lib.findSum([]),0);
assert.equal(lib.findSum(numbers),expectedSum);


//...find average of a list of numbers...
numbers = [1,2,3,4,5,6,7,8,9,10];
average = 5.5;
assert.equal(lib.findAverage(numbers),average);


//..Index Of a Number - Given an array of numbers find the first position of a specified number
numbers = [1,4,2,3,7,3,2,1,4];
assert.equal(lib.findIndexOf(numbers,3),3);
assert.equal(lib.findIndexOf([],1),);
assert.equal(lib.findIndexOf(numbers,1),0);

//..Unique - Given an array, remove duplicate elements and return an array of only unique elements.
  //similar element
numbers = [1,1];
expected = [1];
assert.deepEqual(lib.unique(numbers),expected);
assert.deepEqual(lib.unique([]),[]);
  //string element
input = ["a","b","a","c","a"];
expected = ["a","b","c"];
assert.deepEqual(lib.unique(input),expected);
assert.deepEqual(lib.unique([]),[]);


//..Union - Given two arrays, generate a new array consisting of unique elements across both those arrays.
set1 = [1,0];
set2 = [1,1,0];
expected = [1,0];
assert.deepEqual(lib.union(set1,set2),expected);
assert.deepEqual(lib.union([],[]),[]);
assert.deepEqual(lib.union([0,0],[0,0]),[0]);


//..Difference - Given two arrays, generate a new array that consists of unique elements that are present in the first array, but not in the second.
assert.deepEqual(lib.difference([],[]),[]);
assert.deepEqual(lib.difference([0,1],[1]),[0]);
assert.deepEqual(lib.difference([0,1,4,5,0],[6,1]),[0,4,5]);



//...Zip - insert elements from two arrays as follows:
assert.deepEqual(lib.zip([1,2,3],[4,5]),[[1,4],[2,5]]);
assert.deepEqual(lib.zip([1,2,3],[4,5,6]),[[1,4],[2,5],[3,6]]);


//...Rotate - creates a new array by rotating elements from the given array.
assert.deepEqual(lib.rotate([1,2,3,4,5],2),[3,4,5,1,2]);
assert.deepEqual(lib.rotate([1,2,3,4,5],4),[5,1,2,3,4]);



//...Partition - Given an array of numbers, it returns a partitioned array consisting of numbers above a certain number and below a certain number

assert.deepEqual(lib.partition([]),[[],[]]);
assert.deepEqual(lib.partition([1,2,3,4,5,6,7],3),[[1,2],[4,5,6,7]]);
assert.deepEqual(lib.partition([3,3,3,3],3),[[],[]]);
assert.deepEqual(lib.partition([3,3,3,3],2),[[],[3,3,3,3]]);



//.....tests for aboveThreshold and belowThreshold
assert.deepEqual(lib.numbersAboveThreshold([1,0,4,2,3],2),[4,3]);
assert.deepEqual(lib.numbersBelowThreshold([1,0,4,2,3],2),[1,0]);


//...Extract digits - Given a number, extract the digits of a number into an array

assert.deepEqual(lib.extractDigits(123),[1,2,3]);


//..Descending order - Given an array of numbers, check if the array is in descending order
assert.deepEqual(lib.isInDecending([]),true);
assert.deepEqual(lib.isInDecending([1,2,3]),false);
assert.deepEqual(lib.isInDecending([1,3,2]),false);
assert.deepEqual(lib.isInDecending([3,2]),true);

//..Ascending order - Given an array of numbers, check if the array is in ascending order
assert.deepEqual(lib.isInAscending([]),true);
assert.deepEqual(lib.isInAscending([1,2]),true);
assert.deepEqual(lib.isInAscending([2,1]),false);


//..isSubset - Given two arrays, check if the second is a proper subset of the first.
assert.deepEqual(lib.isSubset([],[]),true);
assert.deepEqual(lib.isSubset([1,2],[1]),true);





