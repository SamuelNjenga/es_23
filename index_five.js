const weak = new WeakMap();
const key = Symbol("ref");

weak.set(key, "Hello, ES2023!");

console.log(weak.get(key)); // Output: Hello, ES2023!
