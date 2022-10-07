a = document.getElementById('text1')
b = document.getElementById('text2')
c = document.getElementById('btn1')

c.addEventListener('click', () => {
     b.innerHTML = 2022 - parseFloat(a.value)
})