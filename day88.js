//cookies are used to store data
console.log(document.cookie)
alert(document.cookie)
let a= prompt(document.cookie)// this thing will bascially store the value in console 
console.log(a)
// cookie has a key and a value which it uses to store
document.cookie="name = merwin"//this will just add a new value in the already present cookies
document.cookie="name2 = anynonyms"// this ill add as already name2 is a ne key 
document.cookie="name3 =  merwin "//this will add no matter what is value
document.cookie="name = the best"//this will over write the cookie with the same key that is name is the already key present
console.log(document.cookie)

let key=prompt("enter your key")
let value=prompt("enter your value")
//document.cookie = `${key} = ${value}`; //this method functions fully for non special characters 
//to avoid this we use encode URI function 
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`;
// this encode function takes any string may be it special or non and converts into a key and value
console.log(document.cookie)
decodeURIComponent(document.cookie)//this is used to decode in the what is the actual message
document.cookie=("path= /a")//this gives us the path of the page
document.cookie=("expires = tue 29 december 2022")