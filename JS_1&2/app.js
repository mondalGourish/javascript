//Question 1
/*let num = prompt("Enter a number:");
if(num%10 == 0){
    console.log("Good");
}else{
    console.log("Bad");
}*/

//Question 2
/*let name = prompt("Enter the name:");
let age = prompt("Enter tha age:");
let msg = (`${name} is ${age} years old`);
alert(msg);*/

//Question 3
/*let quarter = 1;
switch(quarter){
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default:
        console.log("Wrong input");
}*/

//Question 4
/*let str = prompt("Enter a string:");
if((str[0] === "a" || str[0] === "A") && (str.length>5)){
    console.log("Golden String");
}else{
    console.log("Not golden String");
}*/

//question 5
/*let num1 = prompt("Enter first number.");
let num2 = prompt("Enter second number.");
let num3 = prompt("Enter third number.");
if(num1>num2 && num1>num3){
    console.log(`${num1} is the largest`);
}else if(num2>num3){
    console.log(`${num2} is the largest`);
}else{
    console.log(`${num3} is the largest`);
}*/
 
//question 6
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
let rem1 = num1%10;
let rem2 = num2%10;
if(rem1 === rem2){
    console.log("Have the same last digit");
}else{
    console.log("Not the same last digit");

}

