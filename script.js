const dices = [
  "images/dice11.webp",
  "images/dice22.jpg",
  "images/dice33.jpg",
  "images/dice44.jpg",
  "images/dice55.jpg",
  "images/dice66.jpg",
];


let player1 = (Math.random() * 6) | 0;
let player2 = (Math.random() * 6) | 0;

const winner=document.querySelector(".winner")
if(player1>player2)
{
    winner.textContent="Player1 wins!"
}
else if(player1==player2)
{
    winner.textContent = "Draw!";
}
else
{
    winner.textContent = "Player2 wins!";
}

console.log(player1,player2)

document.querySelector(".img1").setAttribute("src",dices[player1]);
document.querySelector(".img2").setAttribute("src",dices[player2]);
