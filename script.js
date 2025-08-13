function rollDice(){

//       1st Player Random Generator
var randNumberGen1 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage1 = "dice" + randNumberGen1 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource1);

//       2nd Player Random Generator
var randNumberGen2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage2 = "dice" + randNumberGen2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[2];

image2.setAttribute("src", randomImageSource2);


//       Wining Conditions
if (randNumberGen1 > randNumberGen2) {
        document.querySelector("h1").innerHTML = " 🚩 Player 1 Wins! ";
}
else if (randNumberGen2 > randNumberGen1) {
        document.querySelector("h1").innerHTML = " Player 2 Wins! 🚩 ";
}
else {
        document.querySelector("h1").innerHTML = " Draw! Try Again. ";
}

}

document.querySelector("button").addEventListener("click", rollDice);

