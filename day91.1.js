// functions using javascripts
function avg(x,y){ //here x  and y are arguments
    console.log("done")
    return Math.round(5+ (x+y)/2)// this will work for rounding off in built function in js
}

//another way to write a function
const sum =(p,q)=>{
    return p +q;
}

let a=10;
let b=30;
let c= 45;
console.log(" 5 + the avg of a  and b is ",avg(a ,b))//here a and b are arguments
console.log(" 5 + the avg of b and c is ",avg(b ,c))
console.log(" 5 + the avg of c and d  is ",avg(a ,c))
console.log(sum(a,b))