const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

// TESTS:
assertArraysEqual(middle([1]), []); // Should Pass
assertArraysEqual(middle([1, 2]), []); // Should Pass
assertArraysEqual(middle([1, 2, 3]), [2]); // Should Pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should Pass
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Should Pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Should Pass
