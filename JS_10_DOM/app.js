// //for 1 button
// let btn = document.querySelector('button');
// console.dir(btn);

// btn.onclick = function(){
//     alert("Button Clicked");
// }

//for multiple button
let btns = document.querySelectorAll('button');
for(btn of btns){
    // btn.onclick = sayHello; //() do not give parenthesis, giving parenthesis means executing the function, but we are doing that it will execute once the button is clicked
    // btn.onmouseenter = mouseHover;
    btn.addEventListener('click',sayHello);
    btn.addEventListener('click',sayName);

}
function sayHello(){
    alert('Hello!');
}
function sayName(){
    alert('Gourish!');
}

function mouseHover(){
    console.log('You hovered here');
}