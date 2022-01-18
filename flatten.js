const flatten = function (arr) {
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flatArr.push(arr[i][j]);
      }
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
};

module.exports = flatten;
