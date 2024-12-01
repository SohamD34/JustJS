// Take a fullname as input and return a user name 
// format = @ + username + username.length

let name = "sohamdeshmukh"

let count = 0;
for(let i of name){
    count ++;
}

let username = "@" + name + count;
console.log(username);

console.log('Length of the username =', username.length);