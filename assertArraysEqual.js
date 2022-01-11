const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every((val,index) => val === arr2[index])){
    return true;
  } else {
    return false;
  }
};


const assertArraysEqual = function(arr1, arr2) {
  console.log(`Result is: ${eqArrays(arr1, arr2)}`)
}

// TESTS: 
assertArraysEqual([1, 2, 3], [1, 2, 3]) //should console.log(true)
assertArraysEqual([1, 2, 3], [1, 8, 3]) //should console.log(true)

