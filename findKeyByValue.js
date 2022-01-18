const findKeyByValue = (object, value) => {
  let keyArray = Object.keys(object);
  for (let key of keyArray) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
