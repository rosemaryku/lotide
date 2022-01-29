const eqArrays = require("./eqArrays");

const eqObjects = function (obj1, obj2) {
  let key1Arr = Object.keys(obj1);
  // console.log("Keys:", key1Arr);
  let valueToReturn = true;

  for (let key of key1Arr) {
    // console.log("Obj 1 Key:", obj1[key]);
    // console.log("Obj 2 Key:", obj2[key]);
    if (typeof obj1[key] == "object") {
      let valueRes = eqObjects(obj1[key], obj2[key]);
      valueToReturn = valueRes;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return valueToReturn;
};

module.exports = eqObjects;
