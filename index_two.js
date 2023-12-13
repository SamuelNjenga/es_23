//we want to find the value 82 towards the end of the list
const numbers = [42, 13, 7, 21, 82, 100];

//Before the proposal

//find
[...numbers].reverse().find((n) => n.value === 82); //82 iterates left to right

//findIndex
console.log(numbers.length - 1 - [...numbers].reverse().findIndex((n) => n.value === 82)); //4
console.log(numbers.length - 1 - [...numbers].reverse().findIndex((n) => n.value === 98)); //should be -1, but 6

//After the proposal

//find
numbers.findLast((n) => n.value === 82); //82 iterates right to left

//findIndex
console.log(numbers.findLastIndex((n) => n.value === 82)); //82
console.log(numbers.findLastIndex((n) => n.value === 98)); //-1