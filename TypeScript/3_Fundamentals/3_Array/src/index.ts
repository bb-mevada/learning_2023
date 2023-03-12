// Auto Infer Types
let numbers1 = [1, 2, 3];
let numbers2 = [1, 2, "3"]; // This can cause the issues

// Explicitely Assigning type
let numbers3: number[] = [1, 2, 3];
// let numbers4: number[] = [1, 2, "3"]; // not allowed

// This will be an array of type any
let numbers5 = [];

// See the power of intellisense
numbers1.forEach((n) => console.log(n));
