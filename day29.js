//returns the value entered by the user in the console
let name = prompt('Enter your name', "guest")
console.log(name)

//Does not eturn anythiing
alert('This is a message')

//Returns True/False
let deleteP = confirm("Want to delete?")
//can also make it to return a custom message
if(deleteP)
{
    console.log('successfully deleted')
}
else{
    console.log('not deleted')
}
console.log(deleteP) 