let a = [1, 2, 73, 4, false, "not present"];
console.log(a); // printing all the values
console.log(a[0]); //printing the values individual values
console.log("the length of a is ", a.length); //length of the whole array
console.log(a[7]);
a[7] = 89; //defining the value which is not present
a[1] = 65; //changing the values of the array
console.log(typeof a);
//ARRAY IS A TYPE OF OBJECT
let num=[1,2,3,4,5]
let b=num.toString()//b is string now
console.log(b)
let c =num.join("_")
console.log(c)//it will join all the array elements each with (_)=>(1_2_3_4_5)
num.pop()//it is used to pop the last element of the array
console.log(num)
let r = num.pop()
console.log(num ,r)// this returns the popped element

num.push(65)
console.log(num)//adda the number to the last

let m = num.shift()
console.log(m,num)//removes the element from the beginning
 let n =num.unshift(899)
 console.log(n,num)// adds element in the bginning to the original array 

let numb =[1,2,3,4,5,6,7,8]
delete num[0]//it will delete the first item
console.log(num)
console.log(num.length)// the size of the array is same even after deleting the the element it will show emoty element present


// helps to  concat means join two arays like union in sets which we do 
let number1=[1,2,3,4,5,6,7,8,9,10]
let number2=[256,46,59,71,89,15,67,79]
let newArray = number1.concat(number2)
console.log(newArray)


//sorting in js
let number=[256,46,59,71,89,15,67,79]
number.sort() // this will sort alphabetically not in ascending order so like the  all the term beginning with one will come one 
console.log(number)