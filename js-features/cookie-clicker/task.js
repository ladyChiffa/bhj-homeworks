var cookie  = document.getElementById("cookie");

var counterField = document.getElementById("clicker__counter");
var counter = 0;

var speedField = document.getElementById("clicker__speed");
var speed = 0;
var start;
var now;


cookie.onclick = function () {
    counter += 1;
    counterField.textContent = counter;
    
    if (counter <= 1){
        start = Date.now();
    }
    else {
        now = Date.now();
        var speed = 1000 / (now - start) * counter;
        speedField.textContent = speed.toFixed(2) + " кликов в секунду";
    }
    
    if (cookie.width == 200) {
        cookie.width = 230;
    }
    else {
        cookie.width = 200;
    }
}
