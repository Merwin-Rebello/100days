setInterval(() => {
    let date = new Date()
    let clocker = document.getElementById('clock')
    clocker.innerHTML=
    date.getHours()+":"+
    date.getMinutes()+":"+
    date.getSeconds()+":"+
    date.getDay()+":"+
    date.getFullYear()+":"+
    date.getMonth()
} ,1000);
