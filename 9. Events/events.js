/* EVENTS
- The change in the state of an object is known as an Event.
- Events are fired to notify code of interesting changes that may affect
code execution.
- Eg - mouse events, keyboard events, form events, print events, etc.


General format -

node.event = () =>{
    // code to be executed
}


// btn1.onclick = () => {
//     console.log('Button 1 was clicked');
// }

// let div = document.getElementById("box");
// div.onmouseover = () => {
//     alert('Mouse over me');
// }


EVENT LISTENERS 
- check for event to handle at all times
- As soon as the event occurs, the event listener executes the code.
- attach multiple handlers to a single event
- helps keep your JavaScript code more modular 

General format -

node.addEventListener('event', callback_fn() => {
    // code to be executed
})



// SUPPOSE WE ADD A FUNCTION THAT WE WANT TO REMOVE LATER

const func = () => {
    console.log('Some function was executed.');
};

btn1.addEventListener('click', func);

// REMOVING AN EVENT LISTENER

btn1.removeEventListener('click', func);   // -->  removes the function from the event listener

*/

let btn1 = document.getElementById('btn1');
let body = document.querySelector('body');
let currMode = body.classList[0];


btn1.addEventListener("click", () => {

    console.log(currMode);

    if(currMode == "light"){
        currMode = "dark";
        body.classList.remove("light");
        body.classList.add("dark");
    }
    else{
        currMode = "light";
        body.classList.remove("dark");
        body.classList.add("light");
    }
    console.log(currMode);
});
