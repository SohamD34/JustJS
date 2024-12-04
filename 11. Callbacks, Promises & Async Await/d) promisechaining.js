// ------------------------------ CHAINING -----------------------------------

/* If we want to run the promises one after the other, we can chain them.
   For this we put one 'then' block inside another 'then' block. */



const getpromise1 = () => {
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


const getpromise2 = () => {
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


// getpromise1().then((res) => {
//     console.log("Result - ",res);
    
//     getpromise2().then((res) => {
//         console.log("Result - ",res);
//     });
// });


/* OUTPUT - 
            fetching data 1
            Data 1
            Result -  success
            fetching data 2
            Data 2
            Result -  success
*/



// THIS RECURSIVE CALLING CAN BE DONE IN A MUCH BETTER WAY USING 'PROMISE-CHAIN' METHOD.


function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
        }, 5000);
    });
}

/*
getData(1).then((res) =>{
    console.log(res);      
    console.log("call to data2");
    getData(2).then(() =>{
        console.log(res);
    })
});

OUTPUT - (after 5 sec)
         data 1
         success
         call to data2
         (after 5 sec)
         data2
         success
*/

// A new method of writing this is -

getData(1)
.then((res) =>{
    console.log(res);
    return getData(2);      
})
.then((res) => {
    console.log(res);
    return getData(3);
})
.then((res) => {
    console.log(res);
});

/* OUTPUT - (after 5 sec)
            data 1
            success
            (after 5 sec)
            data 2
            success
            (after 5 sec)
            data 3
            success
*/ 