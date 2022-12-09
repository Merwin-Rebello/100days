let arr=[45,23,21]
arr.map(()=>{
 console.log(value)
})//map crates a new array

//map is used when we need a new arraay and for each is used when we need to do some operation on the elements of the array
let a = arr.map((value)=>{
    console.log(value)
    return value +1  //so this will give a new array with each value incremented by one
})
console.log(a)

let a1= arr.map((value , index)=>{
    console.log(value, index)    // also the index which will begin from 0 for the first element    
    return value +1   
}) 
console.log(a1)//so this will give a new array with each value incremented by one


let a2= arr.map((value , index,array)=>{
    console.log(value, index,array)    // also the index which will begin from 0 for the first element    
    return value + index   
}) 
console.log(a1)

//array filter methods

let arr2=[45,23,21,0,3,5]
let a3=arr2.filter((a)=>{
    return a<10            // this will also return a new array but only with the filtered values which satisfy the conditions
 })
 console.log(a3)

 //array reduce method
  let arr3=[ 1,2,3,4,5,1,2]
  let newarr3= arr3.reduce(( m1 , m2)=>{
    return m1+m2 // this will  do like pass 1 and 2 add them and than pass the added value which is 3 and add with the next element whihc is 3 so 6 and keep on going
  })
  console.log(newarr3)

//function differently s a variable and  using it by calling it in another variable
  let arr4=[1,2,3,4,5,1,2]
  const reduce_func =(m1,m2)=>{
    return m1 + m2
  }
  let newarr4 = arr4.reduce(reduce_func)
  console.log(newarr4)