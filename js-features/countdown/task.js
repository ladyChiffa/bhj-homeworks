
var counterField = document.getElementById("timer");
var counter = parseInt(counterField.textContent);

function secondsToTime(secondsTotal) {
    var hours   = Math.floor(secondsTotal / 3600);
    var minutes = Math.floor((secondsTotal - hours * 3600) / 60);
    var seconds = secondsTotal - hours * 3600 - minutes * 60;
    
    if (hours   < 10) hours   = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    
    return "" + hours + ":" + minutes + ":" + seconds;
    
}

function countdown() {
    counter -= 1;
    counterField.textContent = secondsToTime(counter);
    
    if (counter <= 0) {
        clearInterval(intervalId);
        alert("Вы победили в конкурсе!");
        window.location.assign("https://www.litres.ru/download_book/139491/119054881/Dostoevskiyi_F._Spisokshkolnoy._Prestuplenie_I_Nakazanie.fb2.zip");
    }
}

const intervalId = setInterval(countdown, 1000);
