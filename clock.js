setInterval(function(){
    let today = new Date();
    let day = today.getDay();
    switch(day)
    {
        case 0:
               document.getElementById('day').innerHTML = "Sun";
               break;
        case 1:
               document.getElementById('day').innerHTML = "Mon";
               break;
        case 2:
               document.getElementById('day').innerHTML = "Tue";
               break;
        case 3:
               document.getElementById('day').innerHTML = "Wed";
               break;
        case 4:
               document.getElementById('day').innerHTML = "Thu";
               break;
        case 5:
               document.getElementById('day').innerHTML = "Fri";
               break;
        case 6:
               document.getElementById('day').innerHTML = "Sat";
               break;
    }
    let hour = today.getHours() < 13?(today.getHours() < 10 ? "0"+ today.getHours(): today.getHours()):today.getHours()-12;
    let minute = today.getMinutes() < 10 ? "0"+ today.getMinutes(): today.getMinutes();
    let sec = today.getSeconds()< 10 ? "0"+ today.getSeconds(): today.getSeconds();
    let period = (hour >= 12)?document.getElementById('ses').innerHTML="PM":document.getElementById('ses').innerHTML="AM";
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = minute;
    document.getElementById('sec').innerHTML = sec;
},1)