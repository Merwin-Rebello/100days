Key = document.getElementById('key')
Value = document.getElementById('value')
add = document.getElementById('btn1')
prt = document.getElementById('btn2')
del = document.getElementById('btn3')

function fun1()
{
    localStorage.setItem(Key.value, Value.value)
}

add.addEventListener('click', fun1)

function show()
{
    Node = document.createElement('p')
    Node.textContent = JSON.stringify(localStorage)
    document.body.appendChild(Node)
}

prt.addEventListener('click', show)

function erase()
{
    localStorage.clear()
}

del.addEventListener('click', erase)
