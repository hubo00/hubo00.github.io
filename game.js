var min = 1;
var max = 100;
var compGuess;

var attempts = 1;

function getRandInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function displayGuess(){
    compGuess = getRandInt(min, max);
    document.getElementById("compGuess").innerHTML = compGuess;
}

function lower(){
    max = compGuess - 1;
    document.getElementById("log").innerHTML += ("IF lower THEN set new max value to old guess. New Max: " + max + "<br>")
    document.getElementById("Max").innerHTML = max
    attempts++;
    displayGuess();
}

function higher(){
    min = compGuess + 1;
    document.getElementById("log").innerHTML += ("IF higher THEN set new min value to old guess. New Min: " + min + "<br>")
    document.getElementById("Min").innerHTML = min
    attempts++;
    displayGuess();
}

function correct(){
    document.getElementById("correct").innerHTML = "Yay! I managed to get it in " + attempts + " tries!"
}