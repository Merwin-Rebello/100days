ip1 = document.getElementById('txt1')
b = document.getElementById('btn1')
c = document.getElementById('txt2')


b.addEventListener('click', () => {
 var val = ip1.value
    if (val%2 ===0){
        c.innerHTML += ip1.value +   'Even'
    }
    else if(val%2 !== 0){
        c.innerHTML += ip1.value +   'Odd'
    }

})

