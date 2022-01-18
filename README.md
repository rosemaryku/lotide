# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @rosemaryku/lotide`

**Require it:**

`const _ = require('@rosemaryku/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(arr)`: Returns first element of an array
- `tail(arr)`: Returns tail of an array (all elements expect first one)
- `middle(array)`: Returns the middle element(s) of the array
- `assertEqual(actual, expected)`: Logs "✅ Assertion Passed" or "🔴 Assertion Failed" when compairing actual vs expected
- `assertArraysEqual(arr1, arr2)`: Logs "✅ Assertion Passed" or "🔴 Assertion Failed" when compairing if two arrays are equal
- `assertObjectsEqual(object1, object2)`: Logs "✅ Assertion Passed" or "🔴 Assertion Failed" when compairing if two objects are equal
- `countLetters(str)`: Returns an object with the count of a specific character
- `countOnly(allItems, itemsToCount)`: Returns the count of specific items in a collection
- `eqArrays(arr1, arr2)`: Evaluates if two arrays are equal
- `eqObjects(object1, object2)`: Evaluates if two objects are equal
- `findKey(obj, callback)`: Returns the key that meets the criteria specified by the callback function
- `findKeyByValue(obj, value)`: Returns the first key that contains a given value or undefined
- `flatten(arr)` : Returns a flattened version of nested array
- `letterPositions(string)` : Returns return all the indices in the string where each character is found
- `map(array, callback)`: Returns a new array of elements modified by the callback function
- `takeUntil(array, callback)` : Returns a slice of a given array until the callback criteria is met
- `without(source, itemsToRemove)`: Returns a new array without a list of items to remove
