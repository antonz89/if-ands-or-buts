

const prompt = require('prompt-sync')({sigint: true});

let pinCode = 1234
let enterCode = Number(prompt('Enter your code: '));

if (enterCode === pinCode){
    console.log("success");
} else {
    console.log("failure");
}