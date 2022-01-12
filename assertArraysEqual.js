const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every((val,index) => val === arr2[index])){
    return true;
  } else {
    return false;
  }
};


const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log(` ✅ Assertion Passed: ${arr1} === ${arr2} `)
  } else {
    console.log(` 🔴 Assertion Failed: ${arr1} !== ${arr2} `)
  }
}

// TESTS: 
assertArraysEqual([1, 2, 3], [1, 2, 3]) // Should Pass 
assertArraysEqual([1, 2, 3], [1, 8, 3]) // Should Fail 

