a = document.getElementById('btn')

a.addEventListener('click', () => {
     document.body.style.textDecoration =  'overline'
})

a.addEventListener('dblclick', () => {
    document.body.style.textDecoration = ''
})