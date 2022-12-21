const button= document.getElementById('get-location')
function gotlocation(position){
console.log(position)
}
function failedlocation(){
    console.log("there was an error in finding ur location")
}
button.addEventListener('click' , async()=>{
  const result= navigator.geolocation.getCurrentPosition( gotlocation , failedlocation);
})


// const loc = document.getElementById("txt")
// a = document.getElementById("btn")

// a.addEventListener("click", () => {
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(show)
//     }
//     else{
//         loc.innerHTML = "not supported"
//     }
// })

// function show() {
//     loc.innerHTML = "Latitude = " + position.coords.latitude +
//   "<br>Longitude = " + position.coords.longitude;
// }