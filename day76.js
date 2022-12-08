let num = [3,4,1,45,6]

// for( let i=0;i<num.length;i++){
//     console.log(num[i])
// }

num.forEach((element)=>{
    console.log(element*element) //each elemenet wil multiply itself
})

//in html collection it will work for only dom we have to use array from
//array .from
 let name="merwin"
 let arr=Array.from(name)
 console.log(arr)

 for(let i of num){
    console.log(i)
 }
 for(let i in num )
 console.log(num[i])
