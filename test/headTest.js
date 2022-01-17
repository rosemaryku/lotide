const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([5, 6, 7]), 5); // Should Pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Should Pass
