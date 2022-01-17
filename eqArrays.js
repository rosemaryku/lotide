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

module.exports = eqArrays;
