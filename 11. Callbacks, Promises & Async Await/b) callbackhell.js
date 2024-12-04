// NESTING - nested if-else, nested loops, nested functions

let age = 19;

// if(age > 18){
//     if(age >= 60){
//         console.log("Senior Citizen");
//     }
//     else{
//         console.log("Adult");
//     }
// }
// else{
//     console.log("Minor");  
// }



function getData(dataId) {        // assume this takes 2 seconds

    setTimeout(() => {
        console.log("Data", dataId);
    }, 2000);
}

// getData(1);

//  But now if we call getData mutliple times, the timer of all 3 will be completed together
//  We need 2 sec gap between successive outputs but it will print all outputs after 2 seconds together
//  This is done by nesting of Callbacks. 





// <!---------------------- NESTING OF CALLBACKS -------------------------->



console.log("Nested callbacks...")

function getData2(dataId, getNextData) {
    
    setTimeout(() => {
        console.log("Data", dataId);

        if(getNextData){
            getNextData();
        }
    }, 2000);

    // takes 2 seconds each time
}

getData2(1, () => {
    getData2(2);
});

// Output - Data 1 --- (2 sec) --- Data 2

getData2(1, () => {
    getData2(2, () => {
        getData2(3, () => {
            getData2(4);
        });
    });
});

// Output - Data 1 --- (2 sec) --- Data 2 --- (2 sec) --- Data 3 --- (2 sec) --- Data 4



/*        <!---------------------- CALLBACK HELL -------------------------->

- All these nested callbacks are called as Callback Hell. They are very difficult to read, manage, debug.
- This is because of the nesting of callbacks.

- To solve this issue - we have something called Promises and Async Await.

*/