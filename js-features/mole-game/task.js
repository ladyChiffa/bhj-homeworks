var killsField = document.getElementById("dead");
var missesField = document.getElementById("lost");

var kills = 0;
var misses = 0;

function checkMole() {
    if (this.className.includes("has-mole")) {
        kills++;
    }
    else {
        misses++;
    }
    
    if (kills >= 10) {
        alert("Победа!");
        kills = 0;
        misses = 0;
    }
    if (misses >= 5) {
        alert("Вы проиграли...");
        kills = 0;
        misses = 0;
    }
    
    killsField.textContent = kills;
    missesField.textContent = misses;
}



for (i = 1; i <= 9; i++) {
   hole = document.getElementById("hole" + i);
   hole.onclick = checkMole;
}