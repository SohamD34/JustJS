// Use of variables

let firstName = "Soham";
let surName="Deshmukh";
let institute = "IIT Jodhpur";

let currAge = 22;
console.log("Old age =", currAge);

let newAge = currAge + 5;
console.log("New age =", newAge);

console.log("Full Name =", firstName + " " + surName);
console.log("Institute =", institute);



// Use of constants

const PI = 3.14159;
console.log("Value of PI =", PI);


// Block scope

// Any code written in {} is called a block. It is a local scope.
// Variables declared inside a block are not accessible outside the block.

let a = 5;
{
    let a = 10;
    console.log("Value of a inside block =", a);
}
console.log("Value of a outside block =", a);