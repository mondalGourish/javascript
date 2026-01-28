// //async function

// async function greet(){
//     //throw "error";
//     return "Hello world!";
// }
// greet()
//     .then((result)=>{
//         console.log("Promise resolved");
//         console.log("Result was:", result);
//     })
//     .catch((err)=>{
//         console.log("Promise rejected with error:", err);
//     });

// let demo = async ()=>{  //creating a async arrow function
//     return 5;
// };

//use of async and await
// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();

// }


// let h1 = document.querySelector("h1");
// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             if(num>3){
//                 reject("Promise rejected");
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}`)
//             resolve("color changed.");
//         },delay);

//     });
// }
// //using async and await
// async function demo(){
//     try{
//     await changeColor("violet",1000);
//     await changeColor("indigo",1000);
//     await changeColor("blue",1000);
//     await changeColor("green",1000);
//     await changeColor("yellow",1000);
//     await changeColor("orange",1000);
//     changeColor("red",1000);
//     }
//     catch(err){
//         console.log("Error caught", err);
//     }
//     let a = 5;
//     console.log(a);
//     console.log("New number:", a+3);

// }


//FETCHING OUR FIRST URL, and using api call
//let url = "https://catfact.ninja/fact";
// fetch(url) //request 1
//     .then((res)=>{
//         // console.log(res);
//         // res.json().then((data)=>{
//         //     console.log(data);
//         // });
//         return res.json(); //response 1
//     })
//     .then((data1)=>{
//         console.log("Data 1 is: ", data1.fact); //print response
//         return fetch(url); //request 2
//     })
//     .then((res)=>{
//         return res.json(); //response 2
//     })
//     .then((data2)=>{
//         console.log("Data 2 is: ",data2.fact); //print response 2
//     })
//     .catch((err)=>{
//         console.log("Error -", err);
//     });

//First request using fetch with async/await

// async function getFacts(){
//     try{
//         let res = await fetch(url); //waiting as it returns a promise
//         let data = await res.json(); //same reason
//         console.log(data.fact);

//         let res2 = await fetch(url); //waiting as it returns a promise
//         let data2 = await res2.json(); //same reason
//         console.log(data2.fact);
//     }catch(e){
//         console.log("err -", e);
//     }
// }


// let btn = document.querySelector('button');
// btn.addEventListener('click', async ()=>{
//     //console.log("btn was clicked");
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#res");
//     p.innerText = fact;

// });




// let url = "https://catfact.ninja/fact";
// //using axios for the same above code
// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }catch(e){
//         console.log("err -", e);
//         return "No fact found";
//     }
// }
// let btn1 = document.querySelector("#button1");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn1.addEventListener("click", async()=>{
//     let link = await getImg();
//     console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src",link)
// });


// async function getImg(){
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//     }catch(e){
//         console.log("err -", e);
//         console.log ("No image found");
//     }
// }

//sending header in axios

// const url3 = "https://icanhazdadjoke.com/";
// async function getJoke(){
//     try{
//         const config = {headers : {Accept : "application/json"}};
//         let res = await axios.get(url3, config);
//         console.log(res.data);
//     }catch(err){
//         console.log("Error -", err);
//     }
// }

//updating query Strings
// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click" , async()=>{
//     let country = document.querySelector("input").value;
//     console.log(country);
//     let colleges = await getColleges(country);
//     console.log(colleges);

//     show (colleges);

// });

// function show(colleges){
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for(col of colleges){
//         console.log(col.name);
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
    
// }


// async function getColleges(country){
//     try{
//         let res = await axios.get(url+country);
//         return res.data;
//     }catch(e){
//         console.log("Error -", e);
//         return [];
//     }
// }

//print the name of the colleges of the entered states of india

let url = "http://universities.hipolabs.com/search?name=india";

let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let state = document.querySelector("input").value.trim().toLowerCase();

    let colleges = await getColleges();
    //filter colleges by state 

    let filterColleges = colleges.filter(col=>
        col["state-province"] &&
        col["state-province"].toLowerCase().includes(state)
    );
    show(filterColleges);
    

});

function show(colleges){
    let list = document.querySelector("#list");
    list.innerText = "";

    if(colleges.length == 0){
        list.innerText = "No colleges found";
        return;
    }
    for(let col of colleges){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}



async function getColleges(state){
    try{
        let res = await axios.get(url);
        return res.data;
    }catch(err){
        console.log("Error -", e);
        return[];
    }
}