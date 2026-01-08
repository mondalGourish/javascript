// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector("div a"));//nesting of query querySelector

// console.log(document.querySelectorAll("div a"));


// //add a paragraph with text in red color
// let para1 = document.createElement('p');
// para1.innerText = "Hey I'm red!";
// document.querySelector("body").append(para1);
// para1.classList.add('red');

// //add a heading with text in blue color
// let heading = document.createElement('h3');
// heading.innerText = "I'm a blue h3";
// document.querySelector('body').append(heading);
// heading.classList.add('blue');

// //a div with black border and pink background, inside it a h1 and p with text
// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let para2 = document.createElement('p');

// h1.innerText = "I'm in a div";
// para2.innerText = "Me too";
// div.append(h1);
// div.append(para2);
// div.classList.add('box');

// document.querySelector('body').append(div);

//Js_9_assignmnet
//1
let btn = document.createElement('button');
let input = document.createElement('input');
btn.innerText = 'Click Me!';
btn.classList.add('button');

document.querySelector('body').prepend(btn);
document.querySelector('body').prepend(input);



//2
btn.setAttribute("id","btn"); 
btn.setAttribute("placeholder","username");

//3
let button = document.querySelector('#btn');
btn.classList.add('btnStyle');

//4
let h1 = document.createElement('h1');
h1.innerHTML = "<u>DOM Practice</u>";
h1.classList.add('h1');
document.querySelector('body').append(h1);

//5
let p = document.createElement('p');
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector('body').append(p);
