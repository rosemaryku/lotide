const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("# eqArrays - Compares two arrays and returns true if equal, false if not equal", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for [1, 2, 3] and [1, 2]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2]), false);
  });
});
