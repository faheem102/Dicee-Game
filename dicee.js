const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
const randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
const heading = document.querySelector("h1");
const player1Dicee = document.querySelector(".img1");
player1Dicee.setAttribute("src", randomDiceImage1);
const player2Dicee = document.querySelector(".img2");
player2Dicee.setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "Player 1 Wins! 🚩😎";
} else if (randomNumber2 > randomNumber1) {
  heading.innerHTML = "Player 2 Wins! 🚩😎";
} else {
  heading.innerHTML = "It's a Draw! 😛";
}

console.log(randomNumber1);
console.log(randomNumber2);
console.log(randomDiceImage1);
console.log(randomDiceImage2);
