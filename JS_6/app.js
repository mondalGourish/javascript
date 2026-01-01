// function average(a,b,c){
//     let sum = a+b+c;
//     console.log(`Sum is ${sum}`);
//     let avg = sum/3;
//     console.log(`Average is ${avg}`);
// }
// let a = parseInt(prompt("Enter 1st number."));
// let b = parseInt(prompt("Enter 2nd number."));
// let c = parseInt(prompt("Enter 3rd number."));
// average(a,b,c);


// function table(num){
//     for(let i=1; i<=10; i++){
        
//         console.log(`${num} * ${i} = ${num*i}`);
//     }
// }
// let num = parseInt(prompt("Enter the number:"));
// table(num);

// function sum(a,b){
//     return a+b;
// }
// let s = sum(sum(1,2),3);
// console.log(s);


// function sum_n(num){
//     let sum = 0;
//     for(let i=1; i<=num; i++){
//         sum += i;
//     }
//     return sum;
// }
// let num = parseInt(prompt("Enter the last number:"));
// console.log(`The sum from 1 to ${num} is ${sum_n(num)}`);


// let str = ["hi", "hello", "bye" ,"bye"];
// function concat(str){
//     let result = "";//as it will give undefined if not initiated with a null value
//     for(let i=0; i<str.length; i++){
//         result += str[i];
//     }
//     return result;
// }
// console.log(concat(str));

//scope
// let greet = "hello";
// function changeGreet(){
//     let greet = "namanste";
//     console.log(greet);

//     function innerGreet(){
//         console.log(greet);
//     }
//     innerGreet();
// }
// console.log(greet);
// changeGreet();

