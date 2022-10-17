a = document.getElementById('btn1')
b = document.getElementById('btn2')
c = document.getElementById('btn3')
box= document.getElementById('container1')

a.addEventListener('click', () => {
   box.style.backgroundImage = "url('messi.jpg')"
})

b.addEventListener('click', () => {
  box.style.backgroundImage = "url('#')"  
})

c.addEventListener('click', () => {
box.style.backgroundImage = "url('sachin.jpg')"  
})