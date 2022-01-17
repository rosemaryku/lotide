const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// TESTS:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3, "Four"], [1, 2, 3, "Four"]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, "Four"]), false); // => should PASS
