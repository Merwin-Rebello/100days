let p1= new Promise((resolve, reject) => {
    setTimeout (()=>{
        console.log("Resolved after 2 seconds")
        resolve(100)
    },2000)
})

p1.then((value)=>{
    console.log(value)
    let p2=new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("promise 2")})
        
    })
    return p2

}).then ((value)=>{
    console.log("we are done")
})