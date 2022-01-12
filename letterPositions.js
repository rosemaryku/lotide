const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i ++){
    if (results[sentence[i]]){
      // results[sentence[i]] = [i];
      results[sentence[i]].push(i)
    } else if (sentence[i] === " ") {
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

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


assertArraysEqual(letterPositions("rosemary").r, [0, 6]);
assertArraysEqual(letterPositions("rosemary").o, [1]);
assertArraysEqual(letterPositions("rosemary").s, [2]);
