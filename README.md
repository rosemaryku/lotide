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

- `head(arr)`: returns the first element of an array
- `tail(arr)`: returns the tail of an array (all elements besides first one)
- `middle(array)`: middle accepts an array and returns the middle element(s) of the array
- `assertEqual(actual, expected)`: will log "✅ Assertion Passed" or "🔴 Assertion Failed" when compairing actual vs expected
- `assertArraysEqual(arr1, arr2)`: will log "✅ Assertion Passed" or "🔴 Assertion Failed" when compairing if two arrays are equal
- `assertObjectsEqual(object1, object2)`: will log "✅ Assertion Passed" or "🔴 Assertion Failed" when compairing if two objects are equal
- `countLetters(str)`: will return an object with the count of a specific character
- `countOnly(allItems, itemsToCount)`: will return the count of specific items in a collection
- `eqArrays(arr1, arr2)`: checks if array1 is equal to array2
- `eqObjects(object1, object2)`: checks if object1 is equal to object2
- `findKey(obj, callback)`: returns the key that meets the criteria specified by the callback function
- `findKeyByValue(obj, value)`: returns return the first key that contains a given value or undefined
- `flatten(arr)` : returns a flattened version of nested array
- `letterPositions(string)` : returns return all the indices in the string where each character is found
- `map(array, callback)`: returns a new array of elements modified by the callback function
- `takeUntil(array, callback)` : returns a slice of a given array until the callback criteria is met
- `without(source, itemsToRemove)`: returns a new array without the items to remove
