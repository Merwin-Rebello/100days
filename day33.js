a = document.getElementById('txt1')
b = document.getElementById('txt2')
c = document.getElementById('txt3')
d = document.getElementById('btn1')

d.addEventListener('click', ()=>{
    let n = b.value
    let m = a.value
    c.innerHTML = parseFloat(m) * parseFloat(n) 

    if(parseFloat(c.value)>=10){
        document.body.style.backgroundColor = "aqua"
    }
    else if(parseFloat(c.value)<=30){
        document.body.style.backgroundColor = "green"
    }
    else if(parseFloat(c.value)>=50){
        document.body.style.backgroundColor = "black"
    }


    
})