let checkbox=document.querySelectorAll("input")
let div=document.querySelector(".container ")
let submit=document.querySelector("button")
let clear=document.getElementById("over")
function rollno()
{
    checkbox.forEach(element=>{
    
       if(element.checked)
       {
        let roll=document.createElement('p')
        roll.textContent=element.name
        div.appendChild(roll)
       }
    });    
}
submit.addEventListener("click",rollno)

function empty()
{
  div.innerHTML=" ";
}
clear.addEventListener("click",empty)