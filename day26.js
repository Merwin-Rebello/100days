a = document.getElementById('txt1')
c = document.getElementById('txt3')
d = document.getElementById('btn1')

d.addEventListener('click', () => {
    c.innerHTML = 'You Burned ' + (a.value) * 0.4 + ' Calories ' + '\nGood Job King ,im proud of you'
})