// console.log("Hi");

// setTimeout(()=>{
//     console.log("Gourish");
// },3000)
// console.log("Welcome");

// let id = setInterval(()=>{
//     console.log("Gourish");
// },3000);

// const student = {
//     name : "Gourish",
//     age : 23,
//     marks : 95, 
//     prop : this,//global scope
//     getName : function(){
//         console.log(this);//student object
//         return this.name;
//     },
//     getMarks: () =>{
//         console.log(this);//parent scope(student), the scope of object that is student is global, so it inherits that
//         return this.marks;
//     },
// };

// const square = (a) =>(a*a);


//  let id = setInterval(() =>{
//   console.log("Hello world");
// },2000);

// setTimeout( ()=>{
//     clearInterval(id);
//     console.log("Ran clear interval");
// },10000);


//Js_7_assignment

//1
// let num = parseInt(prompt("Enter the number of elements:"))
// let arr = [];
// function getNumbers(){
//     for(let i=0; i<num; i++){
//         let value = parseInt(prompt(`Enter the ${i+1} element`));
//         arr.push(value);
//     }
// }

// const arrayAverage = (arr) => {
//     let total = 0;
//     for(let i=0; i<arr.length; i++){
//         total += arr[i];
//     }
//     let average = total/arr.length;
//     return average;
// }
// getNumbers();
// console.log(arrayAverage(arr));

//2
// let num = parseInt(prompt("Enter a number:"));
// const isEven = (num)=>{
//     if(num%2 == 0){
//         console.log("Even");
//     }else{
//         console.log("odd");
//     }
// }

//3
// isEven(num);
// const object={
//     message:'Hello,World!',
//     logMessage(){
//         console.log(this.message);
//     }
// };
// setTimeout(()=>{
//     object.logMessage()
// },1000);

//setTimeout(object.logMessage,1000) //prints undefined

//4
let length=4;
function callback(){
    console.log(this.length);
}
const object={
    length:5,
    method(callback){
        callback();
    },
};
object.method(callback,1,2);