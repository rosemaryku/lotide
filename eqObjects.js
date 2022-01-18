const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
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
  }
  return false;
};

module.exports = eqObjects;
