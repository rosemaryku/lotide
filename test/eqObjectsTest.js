const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

describe("eqObjects - Compares two objects and returns true if both are equal, false if not equal", () => {
  it("returns false for (cd, cd2)", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(cd, cd2), false);
  });

  it("returns false for (ab, ba)", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba), true);
  });
});
