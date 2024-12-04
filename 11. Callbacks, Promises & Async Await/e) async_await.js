/* 
aync - always returns a promise
    - pauses the execution of the function until the promise is resolved
    - async functions are non-blocking

await - pauses the exexution of it surrounding async function until the promise is settled
    - can only be used inside an async function
    - await is used to handle the response of a promise
*/

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data");
            resolve(200);
        }, 2000);
    });
}

async function getWeather() {
    console.log("Getting weather data...");
    await api();                        // 2 seconds
    await api();                        // more 2 seconds    
};

// getWeather();



function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId)
            resolve(dataId);
        }, 2000);
    });
}

async function fetchData() {
    await getData(1);
    await getData(2);
    await getData(3);
};

fetchData();

/* OUTPUT - (2 second)
            Data 1
            (2 second)
            Data 2
            (2 second)
            Data 3 
*/