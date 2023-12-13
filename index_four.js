// Previously WeakMaps only supported Objects as keys despite Symbols also having the feature of being unique and non-replicable.
// ES2023 rectifies this, enabling the use of Symbols as keys enabling more flexibility in utilising the memory-optimisation benefits of WeakMaps.

const weakMap = new WeakMap();
const key = Symbol("key1");
weakMap.set(key, "How to Welcome Symbols to WeakMap !");
console.log(weakMap.get(key)); 

// This change allows for more flexibility in utilizing the memory-optimization benefits of WeakMaps and encourages a wider array of use-cases.
