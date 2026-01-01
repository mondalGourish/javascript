//question 1
// let arr = [10,9,14,5,7,8,0];
// let num = 8;
// function larger(arr,num){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }
// }
// larger(arr,num);

//question 2
// let str = "abcdabcdefgggh";
// function getUnique(str){
//     let unique = "";
//     for(let i=0; i<str.length; i++){
//         let curr = str[i];
//         if(unique.indexOf(curr) == -1){
//             unique += curr;
//         }
//     }
//     return unique;
// }
// console.log(getUnique(str));

//question 3
// let country = ["Australia","Germany","United States of America"];
// function longestName(country){
//     let ansIdx = 0;
//     for(let i=0; i<country.length; i++){
//         let ansLen = country[ansIdx].length;
//         let currLen = country[i].length;
//         if(currLen>ansLen){
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }
// console.log(longestName(country));


//question 4
// let str = "Gourish Mondal";
// function countVowels(str){
//     let count = 0;
//     for(let i=0; i<str.length; i++){
//         if(str.charAt(i) == 'a'||
//             str.charAt(i) == 'e'||
//             str.charAt(i) == 'i'||
//             str.charAt(i) == 'o'||
//             str.charAt(i) == 'u'
//         ){
//           count++;  
//         }
//     }
//     return count;
// }
// console.log(countVowels(str));


//question 5
// let start = parseInt(prompt("Enter the starting number"));
// let end = parseInt(prompt("Enter the ending number"));
// function generateRandom(start,end){
//     let diff = end - start;
//     return Math.floor(Math.random()*diff)+start;
// }
// console.log(generateRandom(start,end));