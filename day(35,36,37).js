dis = document.getElementById('display')

zero = document.getElementById('zero')
zero.addEventListener('click', () => {
    dis.innerHTML += '0'
})
one = document.getElementById('btn1')

one.addEventListener('click', () => {
    dis.innerHTML += '1'
})

two = document.getElementById('btn2')

two.addEventListener('click', () => {
    dis.innerHTML += '2'
})

three = document.getElementById('btn3')
three.addEventListener('click', () => {
    dis.innerHTML += '3'
})

four = document.getElementById('btn4')
four.addEventListener('click', () => {
    dis.innerHTML += '4'
})

five = document.getElementById('btn5')
five.addEventListener('click', () => {
    dis.innerHTML += '5'
})

six = document.getElementById('btn6')
six.addEventListener('click', () => {
    dis.innerHTML += '6'
})

seven = document.getElementById('btn7')
seven.addEventListener('click', () => {
    dis.innerHTML += '7'
})

eight = document.getElementById('btn8')
eight.addEventListener('click', () => {
    dis.innerHTML += '8'
})

nine = document.getElementById('btn9')
nine.addEventListener('click', () => {
    dis.innerHTML += '9'
})


add = document.getElementById('add')
add.addEventListener('click', () => {
    dis.innerHTML += '+'
})


sub = document.getElementById('sub')
sub.addEventListener('click', () => {
    dis.innerHTML += '-'
})

mul = document.getElementById('mult')
mul.addEventListener('click', () => {
    dis.innerHTML += '*'
})

div = document.getElementById('div')
div.addEventListener('click', () => {
    dis.innerHTML += '/'
})
percent = document.getElementById('percentage')//mod gives remainder
percent.addEventListener('click', () => {
    dis.innerHTML += '%'
})



back = document.getElementById('backbutton') //backspace
back.addEventListener('click', () => {
    dis.innerHTML = ''
})

equalstoo.addEventListener('click', () => {
    dis.innerHTML = eval(dis.innerHTML)
})




