let h1 = document.querySelector("h1");

// //function created for callback
// function changeColor(color, delay, nextColorChange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChange){
//             nextColorChange();
//         }
//     },delay);
// }
// //callback hell
// changeColor("red", 1000, ()=>{
//     changeColor("green", 1000, ()=>{
//         changeColor("blue", 1000);
//     });
// });

//refactoring the previous code using promise
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed.");
        },delay);

    });
}
changeColor("red",1000)
.then(()=>{
    console.log("Red done.");
    return changeColor("orange", 1000);
})
.then(()=>{
    console.log("Orange done.");
    return changeColor("green", 1000);
})
.then(()=>{
    console.log("Green done.");
})




// function savetoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();
//         //console.log("Data saved:" , data);
//     }else{
//         failure();
//         //console.log("Data not saved");
//     }
// }

//as a beginner this is a fucking hell for sure

// savetoDb(
//     "Gourish Mondal",
//     ()=>{
//         console.log("Success: Data saved");
//         savetoDb("hello world",
//             ()=>{
//                 console.log("Success2 : data saved");
//             },
//             ()=>{
//                 console.log("Failure: data not saved");
//             }
//         );
//     },
//     ()=>{
//         console.log("failure: Data not saved");
//     }
// );



//using then and catch object of promise to refactor the problem occurred during callback hell

// function savetoDb(data){
//     return new Promise((resolve, reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve("Success");
//         }else{
//             reject("Failure");
//         }
//     });
// }
// let request = savetoDb("Gourish Mondal");
// console.log(request);
// request.then((result)=>{
//     console.log("data 1 saved.promise was resolved");
//     console.log(result);
//     return savetoDb("Hello");
// })
// //promise chaining
// .then((result)=>{
//     console.log("data2 saved");
//     console.log(result);

// })

// .catch((error)=>{
//     console.log("promise was rejected");
//     console.log(error);
// });

