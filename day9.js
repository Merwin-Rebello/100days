button1 = document.getElementById('btn1')
button2 = document.getElementById('btn2')
modal = document.getElementById('modal')

button1.addEventListener('click',()=>{
    modal.showModal();
})

button2.addEventListener('click',()=>{
    modal.close();
})