
const prompt = require('prompt-sync')({sigint: true});



console.log("Player 1, enter 'rock', 'paper', or 'scissors': ")
let inputOne = prompt('> ');

console.log("Player 2, enter 'rock', 'paper', or 'scissors': ")
let inputTwo = prompt('> ');

let p =""
let q = "Player 1 wins!"
let a = "Player 2 wins! "
let c = "Draw!"

if(inputOne === 'rock' && inputTwo === 'scissors'){
    p = q;
} else if(inputOne === 'rock' && inputTwo === 'paper'){
    p = a;
} else if(inputOne === 'rock' && inputTwo === 'rock'){
    p = c;
} 
//____________________________________________________________
if(inputOne === 'scissors' && inputTwo === 'scissors'){
    p = c;
} else if(inputOne === 'scissors' && inputTwo === 'paper'){
    p = q;
} else if(inputOne === 'scissors' && inputTwo === 'rock'){
    p = a;
} 
//____________________________________________________________
if(inputOne === 'paper' && inputTwo === 'scissors'){
    p = a;
} else if(inputOne === 'paper' && inputTwo === 'paper'){
    p = c;
} else if(inputOne === 'paper' && inputTwo === 'rock'){
    p = q;
} 

if (p === a || p === c || p === q) {
    console.log(p);
} else {
    console.log('failure');
}



















// if(inputOne === 'rock' && inputTwo === 'scissors'){
//     console.log("Player 1 wins!");
// } else if(inputOne === 'rock' && inputTwo === 'paper'){
//     console.log("Player 2 wins!");
// } else if(inputOne === 'rock' && inputTwo === 'rock'){
//     console.log("Draw!");
// } 
// //____________________________________________________________
// if(inputOne === 'scissors' && inputTwo === 'scissors'){
//     console.log("Draw!");
// } else if(inputOne === 'scissors' && inputTwo === 'paper'){
//     console.log("Player 1 wins!");
// } else if(inputOne === 'scissors' && inputTwo === 'rock'){
//     console.log("Player 2 wins!");
// } 
// //____________________________________________________________
// if(inputOne === 'paper' && inputTwo === 'scissors'){
//     console.log("Player 2 wins!");
// } else if(inputOne === 'paper' && inputTwo === 'paper'){
//     console.log("Draw!");
// } else if(inputOne === 'paper' && inputTwo === 'rock'){
//     console.log("Player 1 wins!");
// }



//__________________________________________________________________
// if(inputOne === 'rock' && inputTwo === 'scissors'){
//     console.log("Player 1 wins!");
// }
// if(inputOne === 'rock' && inputTwo === 'paper'){
//     console.log("Player 2 wins!");
// }
// if(inputOne === 'rock' && inputTwo === 'rock'){
//     console.log("Draw!");
// }
// //____________________________________________________________
// if(inputOne === 'scissors' && inputTwo === 'scissors'){
//     console.log("Draw!");
// }
// if(inputOne === 'scissors' && inputTwo === 'paper'){
//     console.log("Player 1 wins!");
// }
// if(inputOne === 'scissors' && inputTwo === 'rock'){
//     console.log("Player 2 wins!");
// }
// //____________________________________________________________
// if(inputOne === 'paper' && inputTwo === 'scissors'){
//     console.log("Player 2 wins!");
// }
// if(inputOne === 'paper' && inputTwo === 'paper'){
//     console.log("Draw!");
// }
// if(inputOne === 'paper' && inputTwo === 'rock'){
//     console.log("Player 1 wins!");
// } 





