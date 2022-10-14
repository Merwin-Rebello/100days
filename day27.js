a = document.getElementById('txt1')
b = document.getElementById('btn')
c = document.getElementById('txt2')

b.addEventListener('click', () => {
    switch(parseFloat(a.value))
{
    case 1:
        c.innerHTML = 'January'
        break

    case 2:
         c.innerHTML = 'Februrary'
        break

    case 3:
        c.innerHTML = 'march'
        break
    
    case 4:
        c.innerHTML = 'April'
        break

    case 5:
        c.innerHTML = 'May'
        break

    case 6:
        c.innerHTML = 'June'
        break
    
    case 7:
        c.innerHTML = 'july'
        break
       
    case 8:
        c.innerHTML = 'august'
        break 

    case 9:
        c.innerHTML = 'sept'
        break 

    case 10:
        c.innerHTML = 'oct'
        break

    case 11:
        c.innerHTML = 'nov'
        break 

    case 12:
        c.innerHTML = 'dec'
        break
}

})