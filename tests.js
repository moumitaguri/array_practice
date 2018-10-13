const assert = require('assert');
const lib = require('./library.js');

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

assert.equal(lib.countNumbersAbove([2,2],2),0);
assert.equal(lib.countNumbersAbove([2,1,3],1),2);
assert.equal(lib.countNumbersAbove([2,-1,-2,0],-1),2);
