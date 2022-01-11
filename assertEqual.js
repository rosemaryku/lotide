const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");// Should return Fail 
assertEqual(1, 1); // Should return Pass 
assertEqual("Honey", "Dog") // Should return Fail 
assertEqual("Rosemary","Rosemary"); // / Should return Pass 