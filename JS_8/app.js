//forEach //Map //filter //Every //Some //Reduce
// let arr = [10, 20, 30, 40];
// let dec = arr.every((el) =>
//     (el%10 == 0)
// );
// console.log(dec);

// let arr = [2,3,5,7,9,10];
// let min = arr.reduce((res,el)=>{
//     if(res<el){
//         return res;
//     }else{
//         return el;
//     }
// });
// console.log(min);
 
//finding minimum using a function 

// function getMin(arr){
//     let min = arr.reduce((res,el)=>{
//     if(res<el){
//         return res;
//     }else{
//         return el;
//     }
//     });
//     return min;

// }
// console.log(getMin(arr));

// JS_8 assignmnet

//1
// let arr = [1,2,3,4];
// const square = arr.map((arr)=>(arr*arr));
// console.log(square);

// let sum = square.reduce((res,el)=>(res+el));
// console.log(sum);

// let avg = sum/arr.length;
// console.log(avg);

//2
// let newArr = arr.map(el=>{
//     return el+5;
// });
    
// console.log(newArr);

//3
// let str = ["adam","bob","catlyn","donald","eve"];
// console.log(str.map((str) => str.toUpperCase()));

//4
// const doubleAndReturnArgs = (arr, ...args)=>[
//     arr,
//     ...args.map((v)=>v*2),
// ];
// console.log(doubleAndReturnArgs([1,2,3], 4 , 4));
// console.log(doubleAndReturnArgs([2], 10, 20));

//5
// let obj1 = {
//     a:1,
//     b:2
// };
// let obj2={
//     c:3, 
//     d:4,
// };
// const mergeObjects = (obj1,obj2) =>({
//     ...obj1,...obj2
// });
// console.log(mergeObjects(obj1,obj2));
