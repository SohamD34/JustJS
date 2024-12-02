/*
INHERITANCE
- Inheritance is passing down of properties and methods from parent class to child class.


class Parent {

}

class Child extends Parent{

}
*/

/*
class Parent{
    hello(){
        console.log("Hello from parent class");
    }
}

class Child extends Parent{
    // Child class can access all the properties and methods of parent class
}

let child = new Child();
// child.hello();                          // Hello inherited from parent class




class Person {
    constructor(){
        this.species = "Homo sapien";
    }
    eat(){
        console.log("Eating");
    }
    sleep(){
        console.log("Sleeping");
    }
    work(){
        console.log("Not working");
    }
}

class Engineer extends Person{      // you can not give a new constructor to Engineer now with species
    code(){
        console.log("Coding");
    }
    work(){
        console.log("Working");
    }
}

// let engineer = new Engineer();

// METHODS

engineer.eat();                 // Eating   
engineer.sleep();               // Sleeping
engineer.code();                // Coding
engineer.work();                // Working

// Both child and parent class have same method - "work()"
// In this case, the child method will override the parent method - METHOD OVERRIDING



// ATTRIBUTES

console.log(engineer.job);
console.log(engineer.species);


// SUPER - To call the constructor attributes, methods of the parent class directly from the child class.

*/

class Person{
    constructor(name){
        console.log('Entering parent constructor');
        this.species = "homo sapiens";
        this.name = name;
        console.log('Exiting child constructor');
    }
    eat(){
        console.log("eat");
    }
}

class Engineer extends Person{
    constructor(name, branch){                            // child constructor is called derived constructor
        console.log('Entering child constructor');
        super(name);                                    // invoke parent class constructor
        this.branch = branch;
        console.log('Exiting child constructor');

    }
    work(){
        console.log("Solving problems, building something");
    }
}

// When working with derived constructor, we need to use "super" - which calls and invokes 
// parent class constructor so that the child class attributes can then be assigned.


let engineer = new Engineer("soham","electrical");

// 1. Entering child constructor
// 2. Entering parent constructor
// 3. Exiting child constructor
// 4. Exiting child constructor

console.log(engineer.name);         // soham
console.log(engineer.branch);       // electrical