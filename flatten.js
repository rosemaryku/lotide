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

const flatten = function(arr) {
  let flatArr = []; 
  for (let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
    if (Array.isArray(arr[i])){
      for (let j = 0; j < arr[i].length ; j++){
        flatArr.push(arr[i][j]); 
      }
    } else {
      flatArr.push(arr[i]); 
    }
  }
  console.log(flatArr);
}

// TESTS: 
// assertArraysEqual([1, 2, 3], [1, 2, 3]) //should console.log(true)
// assertArraysEqual([1, 2, 3], [1, 8, 3]) //should console.log(true)


// TESTS: 
// flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
flatten([1, 2, [3, 4, 5], 6, [7, 8, 9], "Ten"]) // => [1, 2, 3, 4, 5, 6]