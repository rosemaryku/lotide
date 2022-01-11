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

function without(sourceArr, itemsToRemoveArr) {

  let newArr = sourceArr; 
  for (let i = 0; i < sourceArr.length; i++){
    for (let j = 0; j < itemsToRemoveArr.length; j ++){
      if (sourceArr[i] === itemsToRemoveArr[j]){
        newArr.splice(i,1);
      }
    }
  }
  console.log(newArr); 
}



// TESTS: 
// without([1, 2, 3], [1]) // => [2, 3]
// without([1, 2, 3, 4, 5, 6], [1, 5, 6]) // => [2, 3, 4]
// without([" 1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
without(["Two", "Three", "4"], ["Three", 4]) // => ["Two", "4"]


// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);