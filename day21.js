a = document.getElementById('txt1')

b = document.getElementById('btn1')

c = document.getElementById('txt2')

b.addEventListener('click', ()=>{
      let d = parseFloat(a.value) * 2.2
      c.innerHTML = d + '  lbs' 
}
)