console.log(sessionStorage)
a= document.querySelectorAll('input')
//b= document.querySelector('input');
button=document.querySelector('#btn1')
 function day1(){
    i=0;
    while(i<a.length)
    {
       
        sessionStorage.setItem(a[i].name,a[i].value)
        i++
    }
console.log(sessionStorage)  
}
button.addEventListener("click",day1); 
//console.log(sessionStorage)
 