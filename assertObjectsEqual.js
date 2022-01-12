const eqObjects = function(object1, object2) {
  let keyArr1 = Object.keys(object1);
  let keyArr2 = Object.keys(object2);

  if (keyArr1.length === keyArr2.length) {
    for (let key of keyArr1) {
      if (Array.isArray(object1[key])) {
        return eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  } return false;
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every((val,index) => val === arr2[index])) {
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  let result = eqObjects(actual, expected);
  if (result) {
    console.log(` ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(` 🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TESTS:
assertObjectsEqual({Name: "Rosemary", City: "Toronto", Pets: 1,}, {Name: "Rosemary", City: "Toronto", Pets: 1,});// Should Pass
assertObjectsEqual({Name: "Rosemary", City: "Toronto", Pets: 1,}, {Name: "Chris", City: "Toronto", Pets: 1,}); // Should Fail




