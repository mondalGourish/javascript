// //for 1 button
// let btn = document.querySelector('button');
// console.dir(btn);

// btn.onclick = function(){
//     alert("Button Clicked");
// }

//for multiple button
// let btns = document.querySelectorAll('button');
// for(btn of btns){
//     // btn.onclick = sayHello; //() do not give parenthesis, giving parenthesis means executing the function, but we are doing that it will execute once the button is clicked
//     // btn.onmouseenter = mouseHover;
//     btn.addEventListener('click',sayHello);
//     btn.addEventListener('click',sayName);

// }
// function sayHello(){
//     alert('Hello!');
// }
// function sayName(){
//     alert('Gourish!');
// }

// function mouseHover(){
//     console.log('You hovered here');
// }

// let para = document.querySelector('p');
// para.addEventListener('click', function(){
//     console.log("Paragraph clicked");
// });

// let div = document.querySelector('.box');
// para.addEventListener('mouseenter', function(){
//     console.log("Mouse entered the box");
// });

// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// let p = document.querySelector('p');
// let btn = document.querySelector('button');

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "pink";
// }

// h1.addEventListener('click',changeColor);
// h3.addEventListener('click',changeColor);
// p.addEventListener('click',changeColor);
// btn.addEventListener('click',);

// let input = document.querySelector('input');
// input.addEventListener('keydown', function(event){
//     console.log(event);
//     console.log('key pressed'); 
// });
// input.addEventListener('keyup', function(){
//     console.log('key up');
// });

let form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    let inp = document.querySelector('input');
    console.dir(inp);
    console.log(inp.value);
});