// PRIMITIVE DATA TYPES
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt


let age = 15;
console.log(typeof age); // number

let price = 15.50;
console.log(typeof price); // number

let name = "John";
console.log(typeof name); // string

let isMarried = false;
console.log(typeof isMarried); // boolean

let x;
console.log(typeof x); // undefined

let y = null;
console.log(typeof y); // object

let sym = Symbol("id");
console.log(typeof sym); // symbol

let big = BigInt("15684194876891697602767849569");
console.log(typeof big); // bigint



// NON PRIMITIVE DATA TYPES
// 1. Object
// 2. Array
// 3. Function
// 4. Date
// 5. RegExp
// 6. Map
// 7. Set
// 8. WeakMap
// 9. WeakSet
// 10. Promise
// 11. Error
// 12. ArrayBuffer
// 13. SharedArrayBuffer
// 14. DataView

let person = {
    name: "John",
    age: 25
};

console.log(typeof person); // object
console.log(typeof person.name); // string


let fruits = ["Apple", "Banana", "Mango", 9];
console.log(fruits);
console.log(typeof fruits); // object
console.log(typeof fruits[0]); // string
console.log(typeof fruits[3]); // number



// STRINGS

console.log("abs" + "xy");  // absxy
console.log("abs" + 5);     // abs5
console.log("abs" + true);  // abstrue