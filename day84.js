// //syncronous programming=> inititae one by one 
// let a = prompt("what is your name?");
// let b = prompt("what is your age");
// let c = prompt("whiich is your fav sport?");
// console.log(a + "is"+b+"years old and has"+c+" as a favourite sport")

// //asyncronous programming=> intiate afterwards
// console.log("start")
// setTimeout(function(){
//     console.log("hey i hhave been printed after 3 seconds")

// },3000)
// console.log("end")

// //callbacks
// function loadscript(src, callbacks){
//     var script = document.createElement("script");
//     script.src=src;
//     script.onload=function(){
//         console.log("loaded script with src:"+src)
//     }
//     script.body.appendChild(script);
// }
// loadscript(www.google.com)

// function hello(){
//     alert("hello worlds")
// }
/// async await
// async function myDisplay(){
//     let myPromise = new Promise(function(myResolve,myReject){
//         let a = 10;
//         let b = 8;
    
//         if(a>b){
//             myResolve("a is bigger")
//         }
//         else{
//             myReject("b is bigger")
//         }
//     })

//     document.getElementById("asaw").innerHTML = await myPromise;
    
// }

// myDisplay()


//the async function returns a promise 
console.log("this id the concept of  async");
async function  merwin()
{
    console.log("this is inside the fucntion");
// as soon as the program controller sees await it stops its exceution ans goes on to finish all the other remaining part and than asycncornoously calls this promise at the last 
//till than this promise is kept pending not even resolved 
    const response=await fetch('https://api.github.com/users');
    console.log('before response')
    const users =await response.json()
    console.log("users resolved")
    return users;//the async promise will get resolved here on return 
}
console.log("before calling the function")
let call= merwin();
console.log("after calling the function")
console.log(call)
call.then(data=>console.log(data))// the then function is written here=>the users value which s converted in json will come here in data  value using => function
console.log("this is the end of the js function ")
