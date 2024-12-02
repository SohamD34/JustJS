let currAge = 16;
let vote = false;

if(currAge >= 18){
    vote = true;
}
else{
    vote = false;
}

if(vote){
    console.log("You can vote !!");
}
else{
    console.log("You can not vote !!");
}


// SWITCH STATEMENTS

const expr = "Papayas";

switch(expr){
    case "Papayas":
        console.log('Papayas are found !');
        break;
    case "Oranges":
        console.log('Papayas not found !');
        console.log('Oranges found !');
        break;
}   