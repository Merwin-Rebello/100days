//syntax of promise

let promise =new Promise((resolve, reject) => {
    alert(" i am an alert in promise")
    resolve(56)
})
console.log('hello')
setTimeout(function(){        //setimeout is a function in which we can set a timer to foor that function to work
    console.log("hello in 2 seconds")
},2000)
console.log("my name is "+ "Merwin")
console.log(promise)
//promise alsoo has 2 states STATE and RESULT which will automatically be present inside
