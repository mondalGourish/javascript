const max = prompt("Enter the maximum number:");

const random = Math.floor(Math.random()*max)+1;
// console.log(random);
let guess = prompt("Guess the number:");

while(true){
    if(guess == "quit"){
        console.log("Quitting the game.");
        break;
    }
    if(guess == random){
        console.log("Congrats! Right guess.Random number was",random);
        break;

    }else if(guess<random){
        guess = prompt("Guess was too small. Try again");
    }else{
        guess = prompt("Guess was large. Try again.");
    }
}