const flatten = require("../flatten");
const assert = require("chai").assert;

describe("# flatten - Should return one array, when provided with an input of nested arrays", () => {
  it("should return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    const actual = flatten([1, 2, [3, 4], 5, [6]]);
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(actual, expected);
  });

  it("should return an emport array if an empty array is the input", () => {
    const actual = flatten([]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
});
