let a = document.querySelector('#btn1');
let b = document.querySelector('#btn2');
let c = document.querySelector('#btn3');
 
a.addEventListener('click',()=>{
    document.body.style.backgroundImage ="url('images/photo-1.jpg')";
});

b.addEventListener('click',()=>{
    document.body.style.backgroundImage ="url('images/photo-2.jpg')";
});

c.addEventListener('click',()=>{
    document.body.style.backgroundImage ="url('images/photo-3.jpg')";
});



