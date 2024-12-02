function func(a, b) {

    if(b == 0){
        return 0;
    }
    return func(a, b - 1) + a;
};


const countVowels = (str) =>{
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}



/*     HIGHER ORDER FUNCTIONS

A function that takes another function as an argument or returns a function
is called a higher order function.

eg - arr.forEach() - takes a function as an argument

*/


let array = [1,2,3,4];

function square(num){
    console.log(num*num);
};

array.forEach(square);