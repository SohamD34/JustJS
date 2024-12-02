// FOR LOOP

for(let i=0; i<5; i++){
    console.log(i+1);
}



// WHILE LOOP

let i = 0;
while(i < 5){
    console.log(i+1);
    i++;
}



// FOR-OF LOOP -- string, array

let strVar = "abcde";
for(let chr of strVar){
    console.log(chr);
}



// FOR-IN LOOP -- objects

let obj = {
    name: "Rahul",
    age: 20,
    cgpa: 7.5,
    pass: true
};

for(let i in obj){
    console.log(i);         // returns keys of the object
    console.log(obj[i]);
}