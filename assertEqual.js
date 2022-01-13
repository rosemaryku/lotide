const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } 
  if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  } 
};

// TESTS: 
assertEqual(1, 1); // Should Pass
assertEqual("Rosemary","Rosemary"); // / Should Pass

assertEqual("Lighthouse Labs", "Bootcamp");// Should Fail 
assertEqual("Honey", "Dog") // Should Fail

