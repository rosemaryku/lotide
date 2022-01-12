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
const middle = function(array){
  let newArr = [];
  if (array.length > 2 && array.length % 2 > 0){   // Odd number of elements 
    newArr.push(array[Math.floor(array.length / 2)]); 
  } else if (array.length > 2 && array.length % 2 === 0) {
    newArr.push(array[(array.length / 2) - 1]); 
    newArr.push(array[array.length / 2]); 
  }
  return newArr;
}

// TESTS: 
assertArraysEqual(middle([1]),[]);    // Should Pass 
assertArraysEqual(middle([1, 2]),[]);   // Should Pass 
assertArraysEqual(middle([1, 2, 3]), [2]);   // Should Pass 
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);   // Should Pass 
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);   // Should Pass 
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);   // Should Pass 




