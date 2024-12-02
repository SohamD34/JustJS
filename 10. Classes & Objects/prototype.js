/* OBJECT - 
    An entity having state and behavior (properties and method)
*/

const student = {
    name: 'John Doe',                         // properties
    age: 20,
    marks: 94.4,
    printMarks: function() {                  // methods
        console.log("Marks = " + this.marks); // this <-> self
    }
};

// student.printMarks();


/* PROTOTYPE -  
    It is an object in itself which is present in all objects that we create by default.
    It is a special property of JS objects.
*/

const employee = {
    calculateTax: function() {
        console.log("Tax rate = 10%");
    }
}
employee.calculateTax()


const karanArjun = {
    salary: 50000,
}

// We want to use the calculateTax method of employee object in karanArjun object.
// We are setting employee object as Prototype of karanArjun object.
// So, we will be able to use methods of employee object in karanArjun object.

karanArjun.__proto__ = employee; 
karanArjun.calculateTax();         // returns 10%


// If we overwrite the prototype with a function of same name, then the new function will be called.

karanArjun.calculateTax = function() {
    console.log("Tax rate = 20%");
}
karanArjun.calculateTax();         // returns 20%