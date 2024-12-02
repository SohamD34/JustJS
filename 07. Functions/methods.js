// replace inplace using Map

let arr = [1,2,3,4];
console.log(arr);


function square(num){
    return num*num;
}

let newArr = arr.map(square);
console.log(newArr);


let anotherArr = arr.map((val) =>{
    return val*val;
});
console.log(anotherArr);


