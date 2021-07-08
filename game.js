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
    console.log(compGuess + " is the new maximum")
    attempts++;
    displayGuess();
}

function higher(){
    min = compGuess + 1;
    console.log(compGuess + " is the new minimum")
    attempts++;
    displayGuess();
}

function correct(){
    document.getElementById("correct").innerHTML = "Yay! I managed to get it in " + attempts + " tries!"
}