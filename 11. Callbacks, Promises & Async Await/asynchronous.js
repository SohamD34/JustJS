/*

SYNCHRONOUS -
- Code is executed line by line in a particular sequence
- Each instruction waits for the previous instruction to complete before executing

ASYNCHRONOUS -
- Code is executed in no particular order
- Some important instructions get blocked due to some previous instructions that take time to complete
- In this case, async code execution allows to execute nect instructions immediately and
- doesn't block the flow.



function hello(){
    console.log('Hello');
}

setTimeout(hello, 2000);        // executed after 2 seconds

setTimeout(() => {
    console.log('World');
}, 4000);                       // executed after 4 seconds

console.log("!");               // executed immediately

*/

/*

CALLBACKS -
- Callbacks are functions that are passed as arguments to other functions
- Callbacks are executed after the completion of some operation

*/

function sum(a, b){
    console.log(a+b);
}

function calculator(a, b, sumCallback){
    sumCallback(a, b);
}

calculator(2, 3, sum);          // 5