//lesrning then snd catch
let p=new Promise((resolve, reject) => {
    console.log("promise isi pending")
    setTimeout(()=>{
        alert(" i am a promise and i am fullfilled")
        resolve(true)
        reject(new Error(" i am an error"))//this is the syantax to throw error
    },6000)
})
//SYNTAX FOR THEN 
p.then((value)=>{  // then can handle twp stuffs result and error both by again using then 
    console.log(value)   
})

// RESOLVE HAS THE SYNTAX (resolve(value))
// REJECT HAS THE SYNTAX (reject(error))

//SYANTAX FO CATCH 
let p1=new Promise((resolve, reject) => {
    console.log("promise isi pending")
    setTimeout(()=>{
        reject(new Error(" i am an error"))//this is the syantax to throw error
    },6000)
})
p1.catch((error)=>{
    console.log("SOME ERROR OCCURED IN P1")
})

let promise = new Promise((resolve, reject) => {
    setTimeout (()=>resolve("donee"),2000)
})
promsise.catch(alert);
//writing the whole reject and resolve on one function
p1.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)  //just because we have written erroe its catching the erroe and not printing here if we remove thhe error function than it wouls throw the error
})