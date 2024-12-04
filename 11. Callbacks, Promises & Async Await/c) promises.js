/* PROMISES

- Promises are a way to handle asynchronous operations in JavaScript. 
- They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

- Promise is for "eventual completion" of a task. It is an Object.

let promise = new Promise((resolve, reject) =>{
    // executor function
})

resolve = promise is fulfilled
reject = promise is rejected

Both resolve and reject are functions.

*/



let promise = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if(a == 2){
        console.log('Success');
        resolve('Success');
    }
    else{
        console.log('Failed');
        reject('Failed');
    }
});

/* A promise can have 3 states: 
    1) Pending
    2) Fulfilled
    3) Rejected

resolve and reject are callback functions that are provided by JavaScript itself.


APIs usually return us a Promise. 

*/

function getData(dataId, getNextData){
    
    return new Promise((resolve, reject) => {    
        setTimeout(() => {
            console.log("data", dataId);
            if(getNextData){
                getData();
            }
        }, 5000);
    });
}


let result = getData('123');
console.log(result);               // Promise { <pending> }

// This will return a promise that the data will be fetched and provided in 5 sec.
// Initially the promise is in pending state. 
// After 5 sec, the data will be provided and the promise will be fulfilled.


 console.log(result);               // Promise { <fulfilled> }

/*___________________________________________________________________________________________________________________________
_____________________________________________________________________________________________________________________________*/






// ------------------ HOW TO USE PROMISES TO HANDLE ASYNCHRONOUS OPERATIONS ----------------------

// promise.then() -- what to do when promise is resolved
// promise.catch() -- what to do when promise is rejected

const getPromise1 = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("fetching data 1");
            setTimeout(() =>{
                console.log("Data 1");
                resolve("success");
            }, 2000);
            
        }, 4000);
    });
};


const getPromise2 = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("fetching data 2");
            setTimeout(() =>{
                console.log("Data 2");
                resolve("success");
            }, 2000);
            
        }, 4000);
    });
};



let p1 = getPromise1();
p1.then((res) => {
    console.log("Result - ",res);
});
p1.catch(() => {
    console.log("Promise is rejected");
});

let p2 = getPromise2();
p2.then((res) => {
    console.log("Result - ",res);
});
p2.catch(() => {
    console.log("Promise is rejected");
});


/* If we write like this, the promises will run parallely. And both data will be fetched together
 OUTPUT - 
        fetching data 1
        fetching data 2
        Data 1
        Result -  success
        Data 2
        Result -  success
*/

