const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every((val,index) => val === arr2[index])){
    return true;
  } else {
    return false;
  }
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// TESTS: 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3, "Four"], [1, 2, 3, "Four"]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, "Four"]), false); // => should PASS