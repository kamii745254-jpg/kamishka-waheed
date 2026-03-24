// ===============================
// 1. LET AND CONST
// ===============================

console.log("=== LET AND CONST ===");

// let example
let marks = 80;
marks = 90; // update allowed
console.log("Marks:", marks);

// const example
const pi = 3.14;
// pi = 3.1416; ❌ not allowed
console.log("Value of PI:", pi);

// var example (not recommended)
var age = 18;
var age = 20; // redeclare allowed
console.log("Age:", age);


// ===============================
// 2. DATA TYPES
// ===============================

console.log("=== DATA TYPES ===");

// String
let name = "Ali";
console.log(name, typeof name);

// Number
let number = 100;
console.log(number, typeof number);

// Boolean
let isStudent = true;
console.log(isStudent, typeof isStudent);

// undefined
let x;
console.log(x, typeof x);

// null
let y = null;
console.log(y, typeof y);


// ===============================
// 3. USER INPUT
// ===============================

console.log("=== USER INPUT ===");

// Take name input
let userName = prompt("Enter your name:");
console.log("Hello " + userName);

// Take number input (string by default)
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number");

// Convert to number
num1 = Number(num1);
num2 = Number(num2);

// Add numbers
let sum = num1 + num2;

console.log("Sum is:", sum);


// ===============================
// EXTRA PRACTICE
// ===============================

// Show type after conversion
console.log(typeof num1);
console.log(typeof num2);