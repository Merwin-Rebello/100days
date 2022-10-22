let text=document.querySelector('.text');
let increase=document.querySelector('.increase');
let decrease=document.querySelector('.decrease');

let textSize=20; //keep the text size same as the css one

increase.addEventListener('click',()=>{
    textSize=textSize+5;
    text.style.fontSize=textSize+'px';
})

decrease.addEventListener('click',()=>{
    textSize=textSize-5;
    text.style.fontSize=textSize+'px';
})