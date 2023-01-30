<html>
  <head>
    <script>
      function coinFlipGame() {
        let coinFlip = Math.floor(Math.random() * 2);
        let choice = prompt("Heads or Tails?");
        let result = (coinFlip == 0) ? "heads" : "tails";
        if (result == "heads" && choice.toLowerCase() == "heads") {
          alert("The flip was heads and you chose heads...you win!");
        } else if (result == "heads" && choice.toLowerCase() == "tails") {
          alert("The flip was heads but you chose tails...you lose!");
        } else if (result == "tails" && choice.toLowerCase() == "heads") {
          alert("The flip was tails but you chose heads...you lose!");
        } else if (result == "tails" && choice.toLowerCase() == "tails") {
          alert("The flip was tails and you chose tails...you win!");
        } else {
          alert("Invalid choice. Please enter 'Heads' or 'Tails'");
        }
      }
    </script>
  </head>
  <body>
    <h3>Coin Flip Game</h3>
    <button onclick="coinFlipGame()">Start Game</button>
  </body>
</html>