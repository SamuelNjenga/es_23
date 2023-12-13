// Array.findLast() and Array.findLastIndex() -> they start searching from the end of the array rather than the beginning
// This feature provides a cleaner and more efficient way to perform reverse order searches, eliminating the need for manual array reversals or complex index calculations

const isEven = (number) => number % 2 === 0;
const numbers = [1, 2, 3, 4];

// Traditional search (first to last)
console.log(numbers.find(isEven)); // Output: 2
console.log(numbers.findIndex(isEven)); // Output: 1

// New reverse search (last to first)
// findLast() and findLastIndex() methods locate the last even number in the array.
console.log(numbers.findLast(isEven)); // Output: 4
console.log(numbers.findLastIndex(isEven)); // Output: 3
