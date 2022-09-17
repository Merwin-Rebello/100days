textbox=document.getElementById('inputext')
button=document.getElementById('clicks')
output=document.getElementById('output')
function day3()
{

 output.innerHTML = textbox.value;

}
button.addEventListener('click',day3);