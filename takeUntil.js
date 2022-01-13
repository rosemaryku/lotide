const takeUntil = function(array, callback) {
  let result = [];
  for (let element of array) {
    if (!callback(element)) {
      result.push(element);
    }
    if (callback(element)) {
      return result;
    }
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every((val,index) => val === arr2[index])) {
    return true;
  } else {
    return false;
  }
};


const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log(` ✅ Assertion Passed: ${arr1} === ${arr2} `);
  } else {
    console.log(` 🔴 Assertion Failed: ${arr1} !== ${arr2} `);
  }
};

// TESTS:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
// Expect: [ 1, 2, 5, 7, 2 ]
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
// Expect: [ 'I\'ve', 'been', 'to', 'Hollywood' ]
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood']);


