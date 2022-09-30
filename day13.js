function displayTime(){
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var invr = document.getElementById('interval');

    document.getElementById('hrs').innerHTML = h;
    document.getElementById('mins').innerHTML = m;
    document.getElementById('secs').innerHTML = s;
    
    if(hrs >= 12)
    {
        invr.innerHTML = PM
    }
    else
    {
        invr.innerHTML = AM
    }

}
setInterval(displayTime, 10)