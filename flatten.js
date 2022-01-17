const eqArrays = function (arr1, arr2) {
  if (
    arr1.length === arr2.length &&
    arr1.every((val, index) => val === arr2[index])
  ) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function (arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result) {
    console.log(` ✅ Assertion Passed: ${arr1} === ${arr2} `);
  } else {
    console.log(` 🔴 Assertion Failed: ${arr1} !== ${arr2} `);
  }
};

const flatten = function (arr) {
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flatArr.push(arr[i][j]);
      }
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
};

// TESTS:
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // Should Pass
