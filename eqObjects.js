const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  let keyArr1 = Object.keys(object1);
  let keyArr2 = Object.keys(object2);

  if (keyArr1.length === keyArr2.length){
    for (let key of keyArr1){
      if (typeof(object1[key]) === "object"){
        return eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]){
        return false;    
      } 
    }
    return true;
  } return false;
};


const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length && arr1.every((val,index) => val === arr2[index])){
    return true;
  } else {
    return false;
  }
};


// TESTS: 
const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const dc = { d: ["2", 3], c: "1" };


assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);

