const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPositions - Returns all the indices in the string where each character is found", () => {
  it("returns [0,6] for ['rosemary']", () => {
    const actual = letterPositions("rosemary")["r"];
    const expected = [0, 6];
    assert.deepEqual(actual, expected);
  });

  it("returns {r: [0], o: [1], s: [2], e: [3] } for ['rose']", () => {
    const actual = letterPositions("rose");
    const expected = { r: [0], o: [1], s: [2], e: [3] };
    assert.deepEqual(actual, expected);
  });
});
