player1 = prompt("Enter First Player Name.");
player2 = prompt("Enter Second Player Name.");

if (player1 == null) {
  player1 = "Player 1";
}
if (player1 == "") {
  player1 = "Player 1";
}
if (player2 == null) {
  player2 = "Player 2";
}
if (player2 == "") {
  player2 = "Player 2";
}


document.querySelector(".player-1").innerHTML = player1;
document.querySelector(".player-2").innerHTML = player2;

var win1 = "🚩 " + player1 + " Wins!";
var win2 = player2 + " Wins!🚩";

function clickTheButton() {
  var random1 = Math.floor(Math.random() * 6 + 1);
  var random2 = Math.floor(Math.random() * 6 + 1);
  if (random1 > random2) {
    document.querySelector("h1").innerHTML = win1;
  } else if (random1 < random2) {
    document.querySelector("h1").innerHTML = win2;
  } else {
    document.querySelector("h1").innerHTML = "It's a Draw.😅 Try Again";
  }

  // Changing the image for player 1 according to its score.
  switch (random1) {
    case 1:
      document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
      break;
    case 2:
      document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
      break;
    case 3:
      document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
      break;
    case 4:
      document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
      break;
    case 5:
      document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
      break;
    case 6:
      document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
      break;
    default:
      document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
      break;
  }

  // Changing the image for player 2 according to its score.
  switch (random2) {
    case 1:
      document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
      break;
    case 2:
      document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
      break;
    case 3:
      document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
      break;
    case 4:
      document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
      break;
    case 5:
      document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
      break;
    case 6:
      document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
      break;
    default:
      document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
      break;
  }
}
