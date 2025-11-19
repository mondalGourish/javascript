// let student = {
//     name:"Gourish",
//     age: 23,
//     marks: 95,
//     city : "Kolkata",
// };
// const post = {
//     username : "Gourish Mondal",
//     content : "This is my first post",
//     likes : 150,
//     reposts : 5,
//     tags : ["@apnacollege", "@delta"] 
// };
// const classInfo = {
//     aman : {
//         grade : "A+",
//         city : "Delhi"
//     },
//     karan : {
//         grade : "A+",
//         city : "Delhi"
//     }
// };
// const classStudent = [
//     {
//         name : "a",
//         city : "Goa"
//     },
//     {
//         name : "b",
//         city : "Kolkata"
//     },
//     {
//         name : "c",
//         city : "delhi"
//     }
// ];


//ASSIGNMENT
//1

// let input;

// while(true){
//     input = parseInt(prompt("Enter the number:"));
//     if(input>=1 && input<=6){
//         break;
//     }else{
//         input = prompt("Invalid input. Try again");
//     }
// }
// const random = Math.floor(Math.random()*6)+1;
// let guess = prompt("Guess the number.");

// while(true){
//     if(guess == "quit"){
//         console.log("You Quit");
//         break;
//     }
//     guess = parseInt(guess);
//     if(guess == random){
//         console.log("Congrats!!. Dice faced",input);
//         break;
//     }else{
//         guess = prompt("Enter again:");
//     }
// }
let input;

while (true) {
    input = parseInt(prompt("Enter a number between 1 and 6:"));
    if (input >= 1 && input <= 6) {
        break;
    } else {
        alert("Invalid input. Try again!");
    }
}

const random = Math.floor(Math.random() * 6) + 1;
let guess = prompt("Guess the number (type 'quit' to exit):");

while (true) {
    if (guess === "quit") {
        console.log("You quit the game.");
        break;
    }

    guess = parseInt(guess);

    if (guess === random) {
        console.log("🎉 Congrats! The dice rolled:", random);
        break;
    } else {
        guess = prompt("Wrong guess! Try again or type 'quit' to exit:");
    }
}
