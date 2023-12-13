// “Change Array by Copy” introduces several new methods that alter arrays while avoiding mutation of the original array.
// This is done by returning a new array copy with the desired modifications.

const original = [1, 2, 3, 4];

// toReversed() returns a copy of the reversed array leaving original untouched
const reversed = original.toReversed();
console.log(original); // Output: [ 1, 2, 3, 4 ]
console.log(reversed); // Output: [ 4, 3, 2, 1 ]

// with() returns a copy of the altered array leaving original untouched
const replaced = original.with(2, 99);
console.log(original); // Output: [ 1, 2, 3, 4 ]
console.log(replaced); // Output: [ 1, 2, 99, 4 ]

//toSorted() returns a copy of the sorted array leaving original untouched
const unsorted = [1, 3, 4, 2];
const sorted = unsorted.toSorted();
console.log(sorted); // [1,2,3,4]
console.log(unsorted); // [1,3,4,2]

//toSpliced() returns spliced copy of array leaving original untouched
const original_one = [1, 4];
const spliced = original.toSpliced();
console.log(spliced); //[1,2,3,4]
console.log(original_one); // [1,4]
