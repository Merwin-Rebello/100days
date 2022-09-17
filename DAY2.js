//colorsetter=document.querySelector('colour')
button = document.getElementById('btn1')

function day2()
{
    let colorbyuser = document.getElementById('box').value
    document.body.style.backgroundColor = colorbyuser;
    document.getElementById('box').value = colorbyuser;
}

button.addEventListener('click',day2);


