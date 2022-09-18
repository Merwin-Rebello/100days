 input= document.getElementById('inputext')
 output= document.getElementById('output')
 add= document.getElementById('addtext')
 del= document.getElementById('deletetext')
function addtexts()
{
    output.innerHTML = input.value;
}
add.addEventListener =('click',addtexts)
function deletext()
{
    output.textcontent=''
}

del.addEventListener=('click',deletext);