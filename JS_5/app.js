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


const random = Math.floor(Math.random() * 6) + 1;//already takes a random input between 1 and 6
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
