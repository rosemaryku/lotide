const tail = require("../tail.js");
const assertEqual = require("../assertEqual");

// Test Case: 1
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// Test Case: 2
const result = tail(["3", "Four", "5", "Six"]);
assertEqual(result.length, 3);
assertEqual(result[0], "Four");
assertEqual(result[1], "5");

// Test Case: 3
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
