let marks = [97, 94, 83, 71, 87];

console.log(marks.length);
console.log(marks);

for(let i=0; i<marks.length; i++){
    console.log(marks[i]);
}

// Arrays in JS are dynamic in nature and are mutable.

// We can add or remove elements from the array.

marks.push(90);
console.log(marks);

// Removing the last element from the array
marks.pop();
console.log(marks);

// Adding an element at the beginning of the array
marks.unshift(100);
console.log(marks);

// Removing an element from the beginning of the array
marks.shift();
console.log(marks);

// Adding an element at a specific index
marks.splice(2, 0, 80);
console.log(marks);

// Removing an element from a specific index
marks.splice(2, 1);
console.log(marks);


// convert and concatenate array to string

let str_marks = marks.toString();
console.log(str_marks);