const eqArrays = require("./equalArrays");

const assertArraysEqual = function (arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log(` ✅ Assertion Passed: ${arr1} === ${arr2} `);
  } else {
    console.log(` 🔴 Assertion Failed: ${arr1} !== ${arr2} `);
  }
};

module.exports = assertArraysEqual;
