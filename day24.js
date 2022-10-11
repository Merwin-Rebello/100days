// input1 = document.getElementById('#inp1');
// input2 = document.getElementById('#inp2');
// output = document.getElementById('#text');
// btn = document.getElementById('#btn1');

// btn=addEventListener('click',()=>{
    
//     if(input1.value>input2.value)
//     {
//         output.innerHTML += input1.value + ' is the largest\n';
//     }
//     elseif(input1.value<input2.value)
//     {
//         output.innerHTML += input2.value +'is the largest\n';
//     }
//     elseif(input1.value = input2.value)
//     {
//         output.innerHTML += 'bothh values are equal';
//     }
    
// })

a = document.getElementById('txt1')
b = document.getElementById('txt2')
c = document.getElementById('btn1')
d = document.getElementById('text3')

c.addEventListener('click', () => {
    if(a.value>b.value){
        d.innerHTML += a.value + ' is the largest\n'
    }
    else if(b.value>a.value){
        d.innerHTML += b.value + ' is the largest\n'
    }
    else if(a.value === b.value){
        d.innerHTML += 'Both  are equal\n'
    }
    
})