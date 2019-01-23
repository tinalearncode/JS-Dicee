function gameRule() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImage1 = "images/dice"+randomNumber1+".png";
    var randomImage2 = "images/dice"+randomNumber2+".png";

    document.querySelector(".img1").setAttribute("src", randomImage1);
    document.querySelector(".img2").setAttribute("src", randomImage2);

    if (randomNumber1 > randomNumber2) {
      document.querySelector("#big-title").textContent =" Player 1 Wins";
      document.querySelector("#player1").textContent = "🚩Player 1";
    } else if ( randomNumber1 < randomNumber2 ){
      document.querySelector("#big-title").textContent ="Player 2 Wins";
      document.querySelector("#player2").textContent = "Player 2 🚩";
    } else {
      document.querySelector("#big-title").textContent ="Draw";
    }
}

function playDicee() {
  window.location.reload();
}

gameRule();
