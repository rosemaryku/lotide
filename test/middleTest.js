const middle = require("../middle");
// const assertArraysEqual = require("../assertArraysEqual");
const assert = require("chai").assert;

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});

// TESTS:
// assertArraysEqual(middle([1]), []); // Should Pass
// assertArraysEqual(middle([1, 2]), []); // Should Pass
// assertArraysEqual(middle([1, 2, 3]), [2]); // Should Pass
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should Pass
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Should Pass
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Should Pass
