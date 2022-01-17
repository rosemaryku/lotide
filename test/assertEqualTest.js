const assertEqual = require("../assertEqual");

// TESTS:
assertEqual(1, 1); // Should Pass
assertEqual("Rosemary", "Rosemary"); // / Should Pass

assertEqual("Lighthouse Labs", "Bootcamp"); // Should Fail
assertEqual("Honey", "Dog"); // Should Fail
