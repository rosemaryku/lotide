const map = function(array, callback) {
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log(` ✅ Assertion Passed: ${arr1} === ${arr2} `);
  } else {
    console.log(` 🔴 Assertion Failed: ${arr1} !== ${arr2} `);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every((val,index) => val === arr2[index])) {
    return true;
  } else {
    return false;
  }
};

// TESTS:
// const words = ["ground", "control", "to", "major", "tom"];
// const words = ["hello"]
const words = ["3sisters", "house", "helicopter"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results1, ["h"]);
assertArraysEqual(results1, ["3", "h", "h"]);