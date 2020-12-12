var myPix = new Array("images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png");
var randomNum1 = Math.floor(Math.random() * myPix.length);
var randomNum2 = Math.floor(Math.random() * myPix.length);
document.getElementById("img1").src = myPix[randomNum1];
document.getElementById("img2").src = myPix[randomNum2];
if (randomNum1 === randomNum2){
  document.querySelector("h1").innerHTML = "Draw";
}

else if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}

else{
  document.querySelector("h1").innerHTML = "PLayer 2 wins!";
}
